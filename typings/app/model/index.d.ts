// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportPhoto from '../../../app/model/photo';
import ExportSentence from '../../../app/model/sentence';
import ExportTest from '../../../app/model/test';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Photo: ReturnType<typeof ExportPhoto>;
    Sentence: ReturnType<typeof ExportSentence>;
    Test: ReturnType<typeof ExportTest>;
  }
}
