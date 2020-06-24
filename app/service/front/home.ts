

import { Service } from 'egg';
export default class HomeService extends Service {

  // 随机获取5条数据
  async getArticle() {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Article.aggregate([{ $match: { status: 1 } }, { $sample: { size: 5 } }]);
    // const result = await ctx.model.Article.aggregate().match({ status: 1 }).sample(5);
    return result;
  }

  async getPhoto() {
    const {
      ctx,
    } = this;
    // promise
    // const result = new Promise(resolve => {
    //   ctx.model.PhotoList.aggregate([{ $match: { status: 1 } }, { $sample: { size: 10 } }], function(error, res1) {
    //     console.log('error', error);
    //     ctx.model.PhotoList.populate(res1, { path: 'photoContent', select: 'address introduce' }, function(error, res2) {
    //       console.log('HomeService -> getPhoto -> error', error);
    //       resolve(res2);
    //     });
    //   });
    // });
    // return result;


    const result = await ctx.model.PhotoList.aggregate([{ $match: { status: 1 } }, { $sample: { size: 10 } }]);
    const result1 = await ctx.model.PhotoList.populate(result, { path: 'photoContent', select: 'address introduce' });
    return result1;
  }
}
