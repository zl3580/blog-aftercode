

// 解析用户的输入，处理后返回相应的结果
import { Controller } from 'egg';
export default class Tag extends Controller {
  // 获取已启用的标签
  public async get() {
    const { ctx } = this;
    const result = await ctx.service.front.tag.get();
    ctx.body = {
      status: '1',
      data: result,
    };
  }

}

