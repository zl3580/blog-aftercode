

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
    const result = await ctx.model.Photo.aggregate([{ $match: { status: 1 } }, { $sample: { size: 5 } }]);
    console.log('ArticleService -> getPhoto -> result', result);
    const data = result.map(item => {
      return {
        address: item.address,
        img: [ item.imgs[0], item.imgs[1] ],
        _id: item._id,
      };
    });
    return data;
  }
}
