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

  // add your egg config in here
  config.middleware = [];
  // mongodb
  // 连接mongodb的配置
  config.mongoose = {
    client: {
      url: 'mongodb://lx544690189:lx82213175@47.99.159.40:27017/blog',
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
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
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
