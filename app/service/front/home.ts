

// 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
import { Service } from 'egg';
export default class ArticleService extends Service {

  // 随机获取5条数据
  async getArticle() {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Article.aggregate([{ $sample: { size: 5 } }]);
    return result;
  }

  async getPhoto() {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Photo.aggregate([{ $sample: { size: 5 } }]);
    console.log('ArticleService -> getPhoto -> result', result);
    const data = result.map(item => {
      return {
        img: item.imgs[0],
        _id: item._id,
      };
    });
    return data;
  }
}
