
import { Service } from 'egg';
export default class PhotoService extends Service {
  // 分页
  async find({ pageSize, pageNum }) {
    const {
      ctx,
    } = this;
    const count = await (await ctx.model.Photo.find()).length;
    const result = await ctx.model.Photo.find({ status: 1 }).skip(pageSize * (pageNum - 1)).limit(parseInt(pageSize))
      .sort({ _id: -1 });
    return { list: result, count };
  }
}

