import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, jwt, io } = app;
  // 登录
  router.post('/api/login', controller.login.login);
  // 鉴权
  router.post('/api/authority', controller.authority.authority);
  // 后台
  // 文章
  router.post('/api/admin/article/add', jwt, controller.admin.article.add);
  router.post('/api/admin/article/find', jwt, controller.admin.article.find);
  router.post('/api/admin/article/details', jwt, controller.admin.article.details);
  router.post('/api/admin/article/update', jwt, controller.admin.article.update);
  router.post('/api/admin/article/status', jwt, controller.admin.article.status);
  router.post('/api/admin/article/delete', jwt, controller.admin.article.delete);
  router.post('/api/article/like', controller.admin.article.like);
  // 获取标签
  router.post('/api/admin/tag/get', jwt, controller.admin.tag.get);
  // 标签
  router.post('/api/admin/tag/add', jwt, controller.admin.tag.add);
  router.post('/api/admin/tag/find', jwt, controller.admin.tag.find);
  router.post('/api/admin/tag/details', jwt, controller.admin.tag.details);
  router.post('/api/admin/tag/update', jwt, controller.admin.tag.update);
  router.post('/api/admin/tag/status', jwt, controller.admin.tag.status);
  router.post('/api/admin/tag/delete', jwt, controller.admin.tag.delete);


  // 图片
  router.post('/api/admin/photo/upload', jwt, controller.admin.photo.upload);
  router.post('/api/admin/photo/add', jwt, controller.admin.photo.add);
  router.post('/api/admin/photo/find', jwt, controller.admin.photo.find);
  router.post('/api/admin/photo/details', jwt, controller.admin.photo.details);
  router.post('/api/admin/photo/update', jwt, controller.admin.photo.update);
  router.post('/api/admin/photo/status', jwt, controller.admin.photo.status);
  router.post('/api/admin/photo/delete', jwt, controller.admin.photo.delete);
  // 每日一句
  router.post('/api/admin/sentence/add', jwt, controller.admin.sentence.add);
  router.post('/api/admin/sentence/find', jwt, controller.admin.sentence.find);
  router.post('/api/admin/sentence/details', jwt, controller.admin.sentence.details);
  router.post('/api/admin/sentence/update', jwt, controller.admin.sentence.update);
  router.post('/api/admin/sentence/status', jwt, controller.admin.sentence.status);
  router.post('/api/admin/sentence/delete', jwt, controller.admin.sentence.delete);
  // 上传七牛
  router.post('/api/admin/upload/getUploadKey', jwt, controller.admin.qiniuUpload.getUploadKey);


  // 前台
  // sentence页
  router.post('/api/sentence/get', controller.front.entry.get);
  // home 首页
  router.post('/api/article/get', controller.front.home.getArticle);
  router.post('/api/photo/get', controller.front.home.getPhoto);

  // Menubar  搜索
  router.post('/api/menubar/search', controller.front.menubar.search);

  // article  页面
  router.post('/api/article/find', controller.front.article.find);
  router.post('/api/article/details', controller.front.article.details);
  router.post('/api/article/getArticleByTag', controller.front.article.getArticleByTag);
  // photo 页面
  router.post('/api/photo/find', controller.front.photo.find);
  router.post('/api/photo/details', controller.front.photo.details);
  // 获取标签
  router.post('/api/tag/get', controller.front.tag.get);
  // 监控台
  router.post('/api/monitor/get', controller.front.monitor.get);
  // 留言板
  router.post('/api/message/get', controller.front.message.get);
  router.post('/api/message/add', controller.front.message.add);

  // 留言板   io
  io.of('/').route('message', io.controller.messagedd.add);
};

