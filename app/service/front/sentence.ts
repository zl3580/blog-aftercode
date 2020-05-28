

// 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
import { Service } from 'egg';
export default class SentenceService extends Service {

  // 随机返回一条
  async get() {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Sentence.aggregate([{ $sample: { size: 1 } }, { $match: { status: 1 } }]);
    let data;
    if (result.length === 0) {
      data = {
        content: '因未知而美好，而讨厌。',
        author: '未知',
        book: '未知',
        bgImg: { name: '未知', url: 'http://47.99.159.40:4001/public/photo/upload/1590634181070-768.jpg' },
      };
    } else {
      data = result[0];
    }
    return data;
  }
}
