

// 解析用户的输入，处理后返回相应的结果
import { Controller } from 'egg';
export default class Article extends Controller {
// 新增
  public async add() {
    const { ctx } = this;
    console.log('------------ctx---------------', ctx);
    const result = await ctx.service.admin.article.add(ctx.request.body);
    console.log('Article -> add -> result', result);
    ctx.body = {
      success: 'true',
      data: {},
    };
    ctx.status = 200;
  }


  public async find(params) {
    const { ctx } = this;
    const result = await ctx.service.article.find(params);
    ctx.body = {
      success: 'true',
      data: result,
    };
    ctx.status = 200;
  }

  public async edit() {
    const { ctx } = this;
    const result = await ctx.service.article.edit(ctx.request.body, ctx.request.body);
    ctx.body = result;
  }

  public async delOne() {
    const { ctx } = this;
    const result = await ctx.service.article.delOne(ctx.request.body);
    ctx.body = result;
    ctx.status = 200;
  }
}

