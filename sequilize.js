const Sequilize = require('sequelize');
const UserModel = require('./models/user');
const BookingModel = require('./models/booking');
const CompanyModel = require('./models/company');

const sequelize = new Sequilize('sportsBookingDB', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = UserModel(sequelize, Sequilize);
const Booking = BookingModel(sequelize, Sequilize);
const Company = CompanyModel(sequelize, Sequilize);

Booking.belongsTo(User, { foreignKey: { name: 'createdBy', allowNull: false }, targetKey: 'id' });
Booking.belongsTo(User, { foreignKey: { name: 'managedBy', allowNull: false }, targetKey: 'id' });

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database and tables created.')
    });

module.exports = {
    User,
    Booking,
    Company
}