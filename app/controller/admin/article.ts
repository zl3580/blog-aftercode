

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
      status: '1',
      success: 'true',
      data: {},
    };
    ctx.status = 200;
  }

  // 查找所有
  public async find() {
    const { ctx } = this;
    const result = await ctx.service.admin.article.find();
    ctx.body = {
      status: '1',
      success: 'true',
      data: result,
    };
    ctx.status = 200;
  }

  // 编辑
  public async update() {
    const { ctx } = this;
    const { _id, status } = ctx.request.body;
    const result = await ctx.service.admin.article.update({ _id }, { status });
    ctx.body = result;
  }

  public async delOne() {
    const { ctx } = this;
    const result = await ctx.service.admin.article.delOne(ctx.request.body);
    ctx.body = result;
    ctx.status = 200;
  }
}

