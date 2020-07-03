// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthority from '../../../app/controller/authority';
import ExportLogin from '../../../app/controller/login';
import ExportAdminArticle from '../../../app/controller/admin/article';
import ExportAdminPhoto from '../../../app/controller/admin/photo';
import ExportAdminQiniuUpload from '../../../app/controller/admin/qiniuUpload';
import ExportAdminSentence from '../../../app/controller/admin/sentence';
import ExportAdminTag from '../../../app/controller/admin/tag';
import ExportFrontArticle from '../../../app/controller/front/article';
import ExportFrontEntry from '../../../app/controller/front/entry';
import ExportFrontHome from '../../../app/controller/front/home';
import ExportFrontMenubar from '../../../app/controller/front/menubar';
import ExportFrontPhoto from '../../../app/controller/front/photo';
import ExportFrontTag from '../../../app/controller/front/tag';

declare module 'egg' {
  interface IController {
    authority: ExportAuthority;
    login: ExportLogin;
    admin: {
      article: ExportAdminArticle;
      photo: ExportAdminPhoto;
      qiniuUpload: ExportAdminQiniuUpload;
      sentence: ExportAdminSentence;
      tag: ExportAdminTag;
    }
    front: {
      article: ExportFrontArticle;
      entry: ExportFrontEntry;
      home: ExportFrontHome;
      menubar: ExportFrontMenubar;
      photo: ExportFrontPhoto;
      tag: ExportFrontTag;
    }
  }
}
