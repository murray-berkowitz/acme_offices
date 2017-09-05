var db = require('./conn');
var Sequeleize = db.Sequelize;

const Office = db.define('office', {
    name: {
        type: Sequeleize.STRING,
        allowNull:false
    },
    lat: {
        type: Sequeleize.FLOAT,
        allowNull:false
    },
    lng: {
        type: Sequeleize.FLOAT,
        allowNull:false
    }
})

module.exports = Office;