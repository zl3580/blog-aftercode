// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminArticle from '../../../app/model/findArticle';
import ExportArticle from '../../../app/model/article';
import ExportTest from '../../../app/model/test';

declare module 'egg' {
  interface IModel {
    AdminArticle: ReturnType<typeof ExportAdminArticle>;
    Article: ReturnType<typeof ExportArticle>;
    Test: ReturnType<typeof ExportTest>;
  }
}
