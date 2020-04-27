// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/model/test';
import ExportAdminArticle from '../../../app/model/article';

declare module 'egg' {
  interface IModel {
    Home: ReturnType<typeof ExportHome>;
    Admin: {
      Article: ReturnType<typeof ExportAdminArticle>;
    }
  }
}
