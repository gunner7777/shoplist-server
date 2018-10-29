import { Router } from 'express';
import * as shoppingController from './shopping.controller';

const routes = new Router();

routes
  .get('/', shoppingController.showCurrent)
  .post('/new', shoppingController.addShopping)
  .delete('/delete/:id', shoppingController.deleteShopping)
  .patch('/edit/:id', shoppingController.updateShopping);
  //.patch('/edit/:id', shoppingController.editShopping);

export default routes;