// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportAdminArticle from '../../../app/controller/admin/article';
import ExportAdminPhoto from '../../../app/controller/admin/photo';
import ExportAdminSentence from '../../../app/controller/admin/sentence';
import ExportFrontEntry from '../../../app/controller/front/entry';
import ExportFrontHome from '../../../app/controller/front/home';
import ExportFrontMenubar from '../../../app/controller/front/menubar';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    admin: {
      article: ExportAdminArticle;
      photo: ExportAdminPhoto;
      sentence: ExportAdminSentence;
    }
    front: {
      entry: ExportFrontEntry;
      home: ExportFrontHome;
      menubar: ExportFrontMenubar;
    }
  }
}
