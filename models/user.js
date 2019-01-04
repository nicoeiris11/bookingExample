module.exports = (sequilize, type) => {
    return sequilize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usermane: type.STRING,
        password: type.STRING,
        name: type.STRING,
        surname: type.STRING,
        email: type.STRING
    })
}