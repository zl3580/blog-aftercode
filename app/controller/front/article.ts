

// 解析用户的输入，处理后返回相应的结果
import { Controller } from 'egg';
export default class Article extends Controller {
  // 文章列表
  public async find() {
    const { ctx } = this;
    const result = await ctx.service.front.article.find(ctx.request.body);
    ctx.body = {
      status: '1',
      data: result,
    };
  }
  // 详情
  public async details() {
    const { ctx } = this;
    const result = await ctx.service.front.article.details(ctx.request.body);
    ctx.body = {
      status: '1',
      data: result,
    };
  }
}

