'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/article/upload', controller.article.upload);
  router.get('/article/detail', controller.article.detail);
  router.get('/article/lists', controller.article.lists);
};
