import { Sequelize } from 'sequelize';
import pg from 'pg';

pg.defaults.ssl = true;
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
	logging: false,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false
		}
	}
})

	(async () => await sequelize.sync({ alter: true }))()
