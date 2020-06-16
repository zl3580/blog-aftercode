

import { Service } from 'egg';
export default class HomeService extends Service {

  // 随机获取5条数据
  async getArticle() {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Article.aggregate([{ $sample: { size: 5 } }, { $match: { status: 1 } }]);
    return result;
  }

  async getPhoto() {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Photo.aggregate([{ $sample: { size: 5 } }, { $match: { status: 1 } }]);
    console.log('ArticleService -> getPhoto -> result', result);
    const data = result.map(item => {
      return {
        img: [ item.imgs[0], item.imgs[1] ],
        _id: item._id,
      };
    });
    return data;
  }
}
