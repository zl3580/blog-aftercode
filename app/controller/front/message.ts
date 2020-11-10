

// 解析用户的输入，处理后返回相应的结果
import { Controller } from 'egg';
export default class Message extends Controller {
  // 信息列表
  public async get() {
    const { ctx } = this;
    const result = await ctx.service.front.message.find(ctx.request.body);
    ctx.body = {
      status: '1',
      data: result,
    };
  }
  // 提交留言
  public async add() {
    const { ctx } = this;
    const result = await ctx.service.front.message.add(ctx.request.body);
    ctx.body = {
      status: '1',
      data: result,
    };
  }
}

