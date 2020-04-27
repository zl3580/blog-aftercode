

// 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
import { Service } from 'egg';
export default class ArticleService extends Service {

  // 新增
  async add(params) {
    console.log('ArticleService -> add -> params', params);
    const {
      ctx,
    } = this;
    console.log('ctx--------------------------', ctx.model);
    const result = await ctx.model.Article.create(params);
    return result;
  }

  // 查找
  async find(params) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Article.find(params);
    return result;
  }

  // 编辑
  async edit(e, d) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Article.updateOne(e, d);
    return result;
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
