const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost:5432/acme_office', {
	logging:false
});
conn.authenticate()
.then(function(success) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = conn;