import express from 'express';
import routes from './routes'

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

module.exports = app;
