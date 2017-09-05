var db = require('./conn');
var Sequeleize = db.Sequelize;

const User = db.define('user', {
    name: {
        type: Sequeleize.STRING,
        allowNull:false
    }
})

module.exports = User;