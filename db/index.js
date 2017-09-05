const db = require('./conn');
const Sequelize = db.Sequelize;
const User = require('./user');
const Office = require('./office');
const sync = function(){
	return db.sync({force:true})
}

User.belongsTo(Office);
Office.hasMany(User);

module.exports = {
	sync
}