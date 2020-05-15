// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportPhoto from '../../../app/model/photo';
import ExportTest from '../../../app/model/test';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Photo: ReturnType<typeof ExportPhoto>;
    Test: ReturnType<typeof ExportTest>;
  }
}
