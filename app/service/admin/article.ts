

// 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
import { Service } from 'egg';
export default class ArticleService extends Service {

  // 新增
  async add(params) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Article.create(params);
    console.log('ArticleService -> add -> result', result);
    return result;
  }

  // 查找文章
  async find() {
    const {
      ctx,
    } = this;
    const result = await ctx.model.FindArticle.find();
    return result;
  }

  // 编辑
  async update(e, d) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Article.update(e, d);
    console.log('ArticleService -> update -> result', result);
    if (result.ok === 1) {
      const data = {
        status: '1',
        success: 'true',
        data: {},
      };
      return data;
    }

  }


  // 删除
  async delOne(params) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Article.deleteOne(params);
    let res = {};
    if (result.deletedCount === 1) {
      res = {
        state: '1',
        msg: 'success',
      };
    }
    return res;
  }
}
