//importing the Sequlize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

//create the connection to the database
//getting credentials from .env file
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
host: 'localhost',
dialect: 'mysql',
port: 3306
});

module.exports = sequelize;