

// 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
import { Service } from 'egg';
export default class SentenceService extends Service {

  // 新增
  async add(params) {
    const {
      ctx,
    } = this;
    await ctx.model.Sentence.create(params);
    return {
      status: '1',
      data: { },
    };
  }

  // 文章分页
  async find({ pageSize, pageNum }) {
    const {
      ctx,
    } = this;
    const count = await (await ctx.model.Sentence.find()).length;
    const result = await ctx.model.Sentence.find().skip(pageSize * (pageNum - 1)).limit(parseInt(pageSize))
      .sort({ _id: -1 });
    return { list: result, count };
  }
  // id获取详情
  async details({ _id }) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Sentence.find({ _id });
    return result[0];
  }
  // 编辑
  async update(e, d) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Sentence.update(e, d);
    if (result.ok === 1) {
      const data = {
        status: '1',
        success: 'true',
        data: {},
      };
      return data;
    }
  }
  // 改变状态
  async status(e, d) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Sentence.update(e, d);
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
    const result = await ctx.model.Sentence.deleteOne(params);
    let res = {};
    if (result.deletedCount === 1) {
      res = {
        status: '1',
        success: 'true',
        data: {},
      };
    }
    return res;
  }
}
