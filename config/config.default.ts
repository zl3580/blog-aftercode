import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587954645342_9347';
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  config.onerror = {
    // 线上页面发生异常时，重定向到这个页面上
    errorPageUrl: '/50x.html',
  };
  // add your egg config in here
  config.middleware = [];
  // mongodb
  // 连接mongodb的配置
  config.mongoose = {
    client: {
      url: 'mongodb://system:123456@47.99.159.40:27017/blog-zl?authSource=blog-lx',
      options: {
        useUnifiedTopology: true,
      },
    },
  };
  // token
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,

    },
    domainWhiteList: [ '*' ],
  };

  config.cors = {
    origin: '*',
    credentials: true, // 允许跨域携带cookie
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  // 上传服务器路径
  config.uploadDir = 'app/public/photo/upload';
  // 上传新增后缀名
  config.multipart = {
    fileExtensions: [ '.jfif' ], // 增加对 apk 扩展名的文件支持
  };
  // add your special config in here
  const bizConfig = {
    // sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
