

// 解析用户的输入，处理后返回相应的结果
import { Controller } from 'egg';
export default class Sentence extends Controller {
  // 详情
  public async get() {
    const { ctx } = this;
    let result: any = await ctx.service.front.monitor.get();
    if (result) {
      result = JSON.parse(JSON.stringify(result));
    }
    ctx.body = {
      status: '1',
      data: result,
    };
  }
}

