

// 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
import { Service } from 'egg';
export default class Message extends Service {

  // 留言列表
  async find({ pageSize, pageNum }) {
    function renderTime(date) {
      const dateee = new Date(date).toJSON();
      return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ')
        .replace(/\.[\d]{3}Z/, '');
    }
    const {
      ctx,
    } = this;
    const count = await ctx.model.Message.count({});
    const result = await ctx.model.Message.find().skip(pageSize * (pageNum - 1)).limit(parseInt(pageSize))
      .sort({ _id: -1 });
    const data = result.map(item => {
      return {
        name: item.name,
        ip: item.ip,
        content: item.content,
        avatar: item.avatar,
        createdAt: renderTime(item.createdAt),
        _id: item._id,
      };
    });
    return { list: data, count };
  }
  // 提交留言
  async add(params) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Message.create(params);
    return result;
  }
}
