// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthority from '../../../app/controller/authority';
import ExportLogin from '../../../app/controller/login';
import ExportAdminArticle from '../../../app/controller/admin/article';
import ExportAdminPhoto from '../../../app/controller/admin/photo';
import ExportAdminSentence from '../../../app/controller/admin/sentence';
import ExportFrontArticle from '../../../app/controller/front/article';
import ExportFrontEntry from '../../../app/controller/front/entry';
import ExportFrontHome from '../../../app/controller/front/home';
import ExportFrontMenubar from '../../../app/controller/front/menubar';
import ExportFrontPhoto from '../../../app/controller/front/photo';

declare module 'egg' {
  interface IController {
    authority: ExportAuthority;
    login: ExportLogin;
    admin: {
      article: ExportAdminArticle;
      photo: ExportAdminPhoto;
      sentence: ExportAdminSentence;
    }
    front: {
      article: ExportFrontArticle;
      entry: ExportFrontEntry;
      home: ExportFrontHome;
      menubar: ExportFrontMenubar;
      photo: ExportFrontPhoto;
    }
  }
}
