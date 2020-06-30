

// 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
import { Service } from 'egg';
export default class TagService extends Service {

  // 获取启用的标签
  async get() {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Tag.find();
    return { list: result };
  }
}
