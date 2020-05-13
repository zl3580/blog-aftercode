

// 解析用户的输入，处理后返回相应的结果
import { Controller } from 'egg';
export default class Article extends Controller {
// 新增
  public async add() {
    const { ctx } = this;
    const result = await ctx.service.admin.article.add(ctx.request.body);
    ctx.body = result;
    ctx.status = 200;
  }

  // 分页
  public async find() {
    const { ctx } = this;
    const result = await ctx.service.admin.article.find(ctx.request.body);
    ctx.body = {
      status: '1',
      success: 'true',
      data: result,
    };
  }
  // 详情
  public async details() {
    const { ctx } = this;
    console.log('Article -> details ----------------> ctx', ctx.request.body);
    const result = await ctx.service.admin.article.details(ctx.request.body);
    ctx.body = {
      status: '1',
      success: 'true',
      data: result,
    };
  }
  // 编辑
  public async update() {
    const { ctx } = this;
    const { _id, title, content } = ctx.request.body;
    const result = await ctx.service.admin.article.update({ _id }, { title, content });
    ctx.body = result;
  }
  // 改变状态
  public async status() {
    const { ctx } = this;
    const { _id, status } = ctx.request.body;
    const result = await ctx.service.admin.article.status({ _id }, { status });
    ctx.body = result;
  }
  // 删除
  public async delete() {
    const { ctx } = this;
    const result = await ctx.service.admin.article.delOne(ctx.request.body);
    ctx.body = result;
  }
}

