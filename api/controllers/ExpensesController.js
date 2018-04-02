"use strict";
var axios = require('axios');
var auth = require("../../authentication_filter.js");
//require('axios-debug')(axios);
const expensesHost = "http://localhost:9030/travelExpenseManager/";

exports.read_all_expenses = function (req, res) {
    console.log("Received Travelexpenses-Request:" + req);

    axios({
        method: 'get',
        url: expensesHost + 'travelExpenses',
        headers: {'Authorization': auth.token},
        params: req.query.travelId ? {'travelId': req.query.travelId} : undefined
    }).then(function (response) {
        res.status(200).json(response.data).end();
    }).catch((err) = > {
        res.status(403).send("Authorization-Header not set, reported by backend: " + err).end();
})
    ;
};

exports.read_a_expense = function (req, res) {
    console.log("Received Travelexpense-Request for ID:" + req.params.travelExpenseId);

    axios({
        method: 'get',
        url: expensesHost + 'travelExpenses/' + req.params.travelExpenseId,
        headers: {'Authorization': auth.token}
    }).then(function (response) {
        res.status(200).json(response.data).end();
    }).catch((err) = > {
        res.status(403).send("Authorization-Header not set, reported by backend: " + err).end();
})
    ;
};