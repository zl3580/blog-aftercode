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
import ExportAdminTag from '../../../app/service/admin/tag';
import ExportFrontArticle from '../../../app/service/front/article';
import ExportFrontHome from '../../../app/service/front/home';
import ExportFrontMenubar from '../../../app/service/front/menubar';
import ExportFrontMessage from '../../../app/service/front/message';
import ExportFrontMonitor from '../../../app/service/front/monitor';
import ExportFrontPhoto from '../../../app/service/front/photo';
import ExportFrontSentence from '../../../app/service/front/sentence';
import ExportFrontTag from '../../../app/service/front/tag';

declare module 'egg' {
  interface IService {
    authority: AutoInstanceType<typeof ExportAuthority>;
    login: AutoInstanceType<typeof ExportLogin>;
    admin: {
      article: AutoInstanceType<typeof ExportAdminArticle>;
      photo: AutoInstanceType<typeof ExportAdminPhoto>;
      sentence: AutoInstanceType<typeof ExportAdminSentence>;
      tag: AutoInstanceType<typeof ExportAdminTag>;
    }
    front: {
      article: AutoInstanceType<typeof ExportFrontArticle>;
      home: AutoInstanceType<typeof ExportFrontHome>;
      menubar: AutoInstanceType<typeof ExportFrontMenubar>;
      message: AutoInstanceType<typeof ExportFrontMessage>;
      monitor: AutoInstanceType<typeof ExportFrontMonitor>;
      photo: AutoInstanceType<typeof ExportFrontPhoto>;
      sentence: AutoInstanceType<typeof ExportFrontSentence>;
      tag: AutoInstanceType<typeof ExportFrontTag>;
    }
  }
}
