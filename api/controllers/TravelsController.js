'use strict';
var axios = require('axios');
var auth = require("../../authentication_filter.js");
//require('axios-debug')(axios);
const travelManagerHost = "http://localhost:9020/travelmanager/";

exports.list_all_travels = function(req, res) {
    console.log("Received Request:" + req);

    axios({
        method: 'get',
        url: travelManagerHost + 'travels',
        headers: {'Authorization': auth.token}
    }).then(function (response) {
        res.status(200).json(response.data).end();
    }).catch((err) => {
        res.status(403).send("Authorization-Header not set, reported by backend: " + err).end();
    });


}

exports.read_a_travel = function(req, res) {
    console.log("Received Request for travel " + req.params.travelId);

    axios ({
       method: 'get',
       url: travelManagerHost + 'travels/' + req.params.travelId,
       headers: {'Authorization': auth.token }
    }).then(function (response) {
        res.status(200).send(response.data).end();
    }).catch((err)=> {
       res.status(err.status()).send(err);
    });

}