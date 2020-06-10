import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, jwt } = app;
  // 登录
  router.post('/login', controller.login.login);
  // 鉴权
  router.post('/authority', controller.authority.authority);
  // 后台
  // 文章
  router.post('/admin/article/add', jwt, controller.admin.article.add);
  router.post('/admin/article/find', jwt, controller.admin.article.find);
  router.post('/admin/article/details', jwt, controller.admin.article.details);
  router.post('/admin/article/update', jwt, controller.admin.article.update);
  router.post('/admin/article/status', jwt, controller.admin.article.status);
  router.post('/admin/article/delete', jwt, controller.admin.article.delete);
  // 标签
  router.post('/admin/tag/add', jwt, controller.admin.tag.add);
  router.post('/admin/tag/find', jwt, controller.admin.tag.find);
  router.post('/admin/tag/details', jwt, controller.admin.tag.details);
  router.post('/admin/tag/update', jwt, controller.admin.tag.update);
  router.post('/admin/tag/status', jwt, controller.admin.tag.status);
  router.post('/admin/tag/delete', jwt, controller.admin.tag.delete);
  // 图片
  router.post('/admin/photo/upload', jwt, controller.admin.photo.upload);
  router.post('/admin/photo/add', jwt, controller.admin.photo.add);
  router.post('/admin/photo/find', jwt, controller.admin.photo.find);
  router.post('/admin/photo/details', jwt, controller.admin.photo.details);
  router.post('/admin/photo/update', jwt, controller.admin.photo.update);
  router.post('/admin/photo/status', jwt, controller.admin.photo.status);
  router.post('/admin/photo/delete', jwt, controller.admin.photo.delete);
  // 每日一句
  router.post('/admin/sentence/add', jwt, controller.admin.sentence.add);
  router.post('/admin/sentence/find', jwt, controller.admin.sentence.find);
  router.post('/admin/sentence/details', jwt, controller.admin.sentence.details);
  router.post('/admin/sentence/update', jwt, controller.admin.sentence.update);
  router.post('/admin/sentence/status', jwt, controller.admin.sentence.status);
  router.post('/admin/sentence/delete', jwt, controller.admin.sentence.delete);


  // 前台
  // sentence页
  router.post('/sentence/get', controller.front.entry.get);
  // home 首页
  router.post('/article/get', controller.front.home.getArticle);
  router.post('/photo/get', controller.front.home.getPhoto);
  // Menubar  搜索
  router.post('/menubar/search', controller.front.menubar.search);
  // article  页面
  router.post('/article/find', controller.front.article.find);
  router.post('/article/details', controller.front.article.details);
  // photo 页面
  router.post('/photo/find', controller.front.photo.find);
};

