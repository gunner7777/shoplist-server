import express, { Router } from 'express';
import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middlewares';
import appRoutes from './modules';

const app = express();

middlewaresConfig(app);
/*
const router = new Router();

router.get('/', (req, res) => {
  res.send(`Starting page ${process.env.NODE_ENV}`);
});
*/
appRoutes(app);

//app.use('/', router);

const PORT = 8080 || constants.PORT;

app.listen(PORT, () => {
  console.log('running on', PORT);
});
