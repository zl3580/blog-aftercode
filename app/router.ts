import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);


  // 后台
  // 文章
  router.post('/admin/article/add', controller.admin.article.add);
  router.post('/admin/article/find', controller.admin.article.find);
  router.post('/admin/article/details', controller.admin.article.details);
  router.post('/admin/article/update', controller.admin.article.update);
  router.post('/admin/article/status', controller.admin.article.status);
  router.post('/admin/article/delete', controller.admin.article.delete);
  // 图片
  router.post('/admin/photo/upload', controller.admin.photo.upload);
  router.post('/admin/photo/add', controller.admin.photo.add);
  router.post('/admin/photo/find', controller.admin.photo.find);
  router.post('/admin/photo/details', controller.admin.photo.details);
  router.post('/admin/photo/update', controller.admin.photo.update);
  router.post('/admin/photo/status', controller.admin.photo.status);
  router.post('/admin/photo/delete', controller.admin.photo.delete);
};

