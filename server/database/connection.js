import { Sequelize } from 'sequelize';
import pg from 'pg'

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

let cloud_config = {
  username: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOSTNAME,
  port: 5432,
  ssl: true,
  dialect: 'postgres',
  dialectOptions: {
    "ssl": { "require": true }
  }
};


const sequelize = new Sequelize(cloud_config)

module.exports = sequelize