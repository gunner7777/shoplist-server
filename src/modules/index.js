import usersRoutes from './users/users.routes';
import productsRoutes from './products/products.routes';
import shoppingRoutes from './shopping/shopping.routes';

export default app => {
  app.use('/api/v1/users', usersRoutes);
  app.use('/api/v1/products', productsRoutes);
  app.use('/api/v1/shopping', shoppingRoutes);
};