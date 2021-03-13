"use strict";

var _sequelize = require("sequelize");

var _pg = _interopRequireDefault(require("pg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
//   host: "localhost",
//   dialect: "postgres"
// })
// export const connect = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully')
//   } catch (error) {
//     console.log('Unable to connect to database', error)
//   }
// }
// export const client = new pg.Client({
//   user: "postgres",
//   password: "12345",
//   database: "pfdb",
//   port: 5432,
//   host: "localhost",
//   ssl: true
// });
var cloud_config = {
  username: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: DATABASE_PORT,
  ssl: true,
  dialect: 'postgres',
  dialectOptions: {
    "ssl": {
      "require": true
    }
  }
};
var sequelize = new _sequelize.Sequelize(cloud_config);
module.exports = sequelize;