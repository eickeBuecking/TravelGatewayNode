"use strict";
var token;
exports.checkToken = function (req, res, next) {
    console.log("Authentication-Check started");
    token = req.get('Authorization');
    if (!token) {
        res.status(403).send("Authorization-Header not set").end();
    } else {
        exports.token = token;
        next();
    }
}