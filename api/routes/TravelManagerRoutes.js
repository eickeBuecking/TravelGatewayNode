'use strict';
module.exports = function (app) {
    var travels = require('../controllers/TravelsController');
    var expenses = require('../controllers/ExpensesController.js');

    app.route('/travels')
        .get(travels.list_all_travels);

    app.route('/travels/:travelId')
        .get(travels.read_a_travel);

    app.route('/travelExpenses')
        .get(expenses.read_all_expenses);

    app.route('/travelExpenses/:travelExpenseId')
        .get(expenses.read_a_expense);


}
