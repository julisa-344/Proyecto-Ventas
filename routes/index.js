const express = require('express');

const productsRouter = require('./productsRoutes');
const usersRouter = require('./usersRoutes');
const categoriesRouter = require('./categoriesRoutes');
const orderRouter = require('./ordersRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
}

module.exports = routerApi;
