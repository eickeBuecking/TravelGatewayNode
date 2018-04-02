'use strict';
module.exports = function (app) {
    var travels = require('../controllers/TravelsController');

    app.route('/travels')
        .get(travels.list_all_travels);

    app.route('/travels/:travelId')
        .get(travels.read_a_travel);
}
