module.exports = (sequilize, type) => {
    return sequilize.define('company', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        address: type.STRING,
        email: type.STRING
    });
}