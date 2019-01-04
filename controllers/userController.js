const { User } = require('../sequilize');

findAll = function (req, res) {
    User.findAll().then(users => res.json(users))
        .catch(function (err) {
            res.status(500);
            res.send({ error: 'error', message: err.message });
        });
}

create = function (req, res) {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(function (err) {
            res.status(400);
            res.send({ error: 'error', message: err.message });
        });
}

remove = function (req, res) {
    User.destroy({
        where: { id: req.body.id }
    })
        .then(msg => res.json(msg))
        .catch(function (err) {
            res.status(400);
            res.send({ error: 'error', message: err.message });
        });
}

module.exports = {
    findAll,
    create,
    remove
}