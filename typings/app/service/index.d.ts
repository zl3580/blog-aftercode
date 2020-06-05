// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAuthority from '../../../app/service/authority';
import ExportLogin from '../../../app/service/login';
import ExportAdminArticle from '../../../app/service/admin/article';
import ExportAdminPhoto from '../../../app/service/admin/photo';
import ExportAdminSentence from '../../../app/service/admin/sentence';
import ExportFrontArticle from '../../../app/service/front/article';
import ExportFrontHome from '../../../app/service/front/home';
import ExportFrontMenubar from '../../../app/service/front/menubar';
import ExportFrontPhoto from '../../../app/service/front/photo';
import ExportFrontSentence from '../../../app/service/front/sentence';

declare module 'egg' {
  interface IService {
    authority: AutoInstanceType<typeof ExportAuthority>;
    login: AutoInstanceType<typeof ExportLogin>;
    admin: {
      article: AutoInstanceType<typeof ExportAdminArticle>;
      photo: AutoInstanceType<typeof ExportAdminPhoto>;
      sentence: AutoInstanceType<typeof ExportAdminSentence>;
    }
    front: {
      article: AutoInstanceType<typeof ExportFrontArticle>;
      home: AutoInstanceType<typeof ExportFrontHome>;
      menubar: AutoInstanceType<typeof ExportFrontMenubar>;
      photo: AutoInstanceType<typeof ExportFrontPhoto>;
      sentence: AutoInstanceType<typeof ExportFrontSentence>;
    }
  }
}
