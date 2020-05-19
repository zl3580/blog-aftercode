

// 解析用户的输入，处理后返回相应的结果
import { Controller } from 'egg';
export default class Sentence extends Controller {
  // 详情
  public async get() {
    const { ctx } = this;
    const result = await ctx.service.front.sentence.get();
    ctx.body = {
      status: '1',
      data: result,
    };
  }
}

