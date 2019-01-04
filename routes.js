const bookingController = require('./controllers/bookingController');
const userController = require('./controllers/userController');
const constants = require('./utils/constants');

module.exports = (app) => {

    //BOOKING ENDPOINTS
    app.route(constants.BOOKING_ENDPOINT)
        .get(bookingController.findAll)
        .post(bookingController.create)

    //USER ENDPOINTS
    app.route(constants.USERS_ENDPOINT)
        .get(userController.findAll)
        .post(userController.create)
        .delete(userController.remove)
}