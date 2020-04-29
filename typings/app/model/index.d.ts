// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportFindArticle from '../../../app/model/findArticle';
import ExportTest from '../../../app/model/test';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    FindArticle: ReturnType<typeof ExportFindArticle>;
    Test: ReturnType<typeof ExportTest>;
  }
}
