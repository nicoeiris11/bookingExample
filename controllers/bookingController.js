const { Booking } = require('../sequilize');

findAll = function (req, res) {
    Booking.findAll()
        .then(bookings => res.json(bookings))
        .catch(function (err) {
            res.status(400);
            res.send({ error: 'error', message: err.message });
        });
}

create = function (req, res) {
    Booking.create(req.body)
        .then(booking => res.json(booking))
        .catch(function (err) {
            res.status(400);
            res.send({ error: 'error', message: err.message });
        });
}

module.exports = {
    findAll,
    create
}