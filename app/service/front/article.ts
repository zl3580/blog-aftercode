

// 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
import { Service } from 'egg';
export default class ArticleService extends Service {

  // 文章列表
  async find({ pageSize, pageNum }) {
    const {
      ctx,
    } = this;
    const count = await ctx.model.Article.count({});
    const result = await ctx.model.Article.find({ status: 1 }).skip(pageSize * (pageNum - 1)).limit(parseInt(pageSize))
      .sort({ _id: -1 });
    return { list: result, count };
  }
  // id获取详情
  async details({ _id }) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Article.find({ _id });
    return result[0];
  }
  // 通过标签获取tag
  async getArticleByTag(_id) {
    console.log('getArticleByTag -> _id', _id);
    const {
      ctx,
    } = this;
    const result = await ctx.model.Article.find({ tagId: _id }).sort({ _id: -1 });
    if (result.length === 0) {
      result[0] = await ctx.model.Article.findById('5eead2c6b877ab2af45019ef');
    }
    return { list: result };
  }
}
