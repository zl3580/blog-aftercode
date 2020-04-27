import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  // router.post('/add', controller.test.add);
  // router.post('/find', controller.test.find);
  // router.post('/edit', controller.test.edit);
  // router.post('/delOne', controller.test.delOne);

  // 后台
  router.post('/admin/add/article', controller.admin.article.add);
};

