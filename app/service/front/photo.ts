
import { Service } from 'egg';
export default class PhotoService extends Service {
  // 获取所有photo
  async find() {
    const {
      ctx,
    } = this;
    const count = await (await ctx.model.PhotoList.find({ status: 1 })).length;
    const result = await ctx.model.PhotoList.find({ status: 1 })
      .populate('photoContent', 'address introduce city');
    return { list: result, count };
  }
  // id获取详情
  async details({ _id }) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.PhotoList.find({ _id });
    return result[0];
  }
}

