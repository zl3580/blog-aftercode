// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/test';
import ExportAdminArticle from '../../../app/service/admin/article';
import ExportAdminPhoto from '../../../app/service/admin/photo';
import ExportAdminSentence from '../../../app/service/admin/sentence';
import ExportFrontHome from '../../../app/service/front/home';
import ExportFrontSentence from '../../../app/service/front/sentence';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    admin: {
      article: AutoInstanceType<typeof ExportAdminArticle>;
      photo: AutoInstanceType<typeof ExportAdminPhoto>;
      sentence: AutoInstanceType<typeof ExportAdminSentence>;
    }
    front: {
      home: AutoInstanceType<typeof ExportFrontHome>;
      sentence: AutoInstanceType<typeof ExportFrontSentence>;
    }
  }
}
