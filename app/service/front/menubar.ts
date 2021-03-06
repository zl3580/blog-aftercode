import { Service } from 'egg';
export default class MenubarService extends Service {
  // 搜索
  async search({ type, keyword }) {

    const {
      ctx,
    } = this;
    let result;
    const keyword1 = new RegExp(keyword, 'i'); // 不区分大小写
    if (type === 'article') {
      result = await ctx.model.Article.find({
        status: 1,
        $or: [ // 多条件，数组
          { title: { $regex: keyword1 } },
          { content: { $regex: keyword1 } },
        ],
      }).sort({ _id: -1 });
      if (result.length === 0) {
        result[0] = await ctx.model.Article.findById('5eead2c6b877ab2af45019ef');
      }
    } else {
      result = await ctx.model.Photo.find({
        status: 1,
        $or: [ // 多条件，数组
          { address: { $regex: keyword1 } },
          { city: { $regex: keyword1 } },
          { introduce: { $regex: keyword1 } },
        ],
      });
      const data: any = [];
      result.forEach(item => {
        const res = ctx.model.PhotoList.find({ photoContent: item._id }).populate('photoContent', 'address introduce city');
        data.push(res);
      });
      const temp = await Promise.all(data);
      if (temp.length > 0) {
        result = temp.reduce((a, b) => { return Array.isArray(a) ? a.concat(b) : []; });
      } else {
        result = [];
      }
    }
    return result;
  }
}
