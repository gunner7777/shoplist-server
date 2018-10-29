import { Router } from 'express';
import * as productsController from './products.controller';

const routes = new Router();

routes
  .get('/', productsController.showAllProducts)
  .get('/:id', productsController.getProduct)
  .post('/new', productsController.addProduct)
  .delete('/delete/:id', productsController.deleteProduct)
  .patch('/edit/:id', productsController.editProduct);

export default routes;