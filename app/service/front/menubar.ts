import { Service } from 'egg';
export default class ArticleService extends Service {
  // 搜索
  async search({ type, keyword }) {
    const {
      ctx,
    } = this;
    let result;
    const keyword1 = new RegExp(keyword, 'i'); // 不区分大小写
    if (type === 'article') {
      result = await ctx.model.Article.find({
        $or: [ // 多条件，数组
          { title: { $regex: keyword1 } },
          { content: { $regex: keyword1 } },
        ],
      });
    } else {
      result = await ctx.model.Photo.find({
        $or: [ // 多条件，数组
          { address: { $regex: keyword1 } },
          { introduce: { $regex: keyword1 } },
        ],
      });
    }
    return result;
  }
}
