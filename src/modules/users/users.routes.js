import { Router } from 'express';
import * as usersController from './users.controller';

const routes = new Router();

routes.get('/', (req, res) => { res.send('Fuck off'); });
routes.get('/signup', usersController.signUp);

export default routes;