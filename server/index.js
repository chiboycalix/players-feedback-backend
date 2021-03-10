import "core-js/stable";
import "regenerator-runtime/runtime";
import express from 'express';
import routes from './routes';
import { connect } from './database/connection'

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  connect()
})

module.exports = app;
