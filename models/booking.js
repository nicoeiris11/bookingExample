module.exports = (sequilize, type) => {
    return sequilize.define('booking', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startDate: type.DATE,
        endDate: type.DATE,
        description: type.STRING,
        price: type.INTEGER
    });
}