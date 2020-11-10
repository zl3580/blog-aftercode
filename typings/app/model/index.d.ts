// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportMessage from '../../../app/model/message';
import ExportPhoto from '../../../app/model/photo';
import ExportPhotoList from '../../../app/model/photoList';
import ExportSentence from '../../../app/model/sentence';
import ExportTag from '../../../app/model/tag';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Message: ReturnType<typeof ExportMessage>;
    Photo: ReturnType<typeof ExportPhoto>;
    PhotoList: ReturnType<typeof ExportPhotoList>;
    Sentence: ReturnType<typeof ExportSentence>;
    Tag: ReturnType<typeof ExportTag>;
    User: ReturnType<typeof ExportUser>;
  }
}
