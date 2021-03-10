import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: "localhost",
  dialect: "postgres"
})

export const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully')
  } catch (error) {
    console.log('Unable to connect to database', error)
  }
}