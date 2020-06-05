

// 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
import { Service } from 'egg';
export default class LoginService extends Service {
  async login(params) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.User.findOne(params);
    return result;
  }
  async token({ _id, token }) {
    console.log('LoginService -> token -> _id', _id);
    console.log('-----------------------------token', token);
    const {
      ctx,
    } = this;
    const result = await ctx.model.User.updateOne({ _id }, { $set: { token } });
    return result;
  }
}
