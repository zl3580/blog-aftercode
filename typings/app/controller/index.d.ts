// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportAdminArticle from '../../../app/controller/admin/article';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    admin: {
      article: ExportAdminArticle;
    }
  }
}
