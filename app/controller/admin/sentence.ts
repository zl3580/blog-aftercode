

// 解析用户的输入，处理后返回相应的结果
import { Controller } from 'egg';
export default class Sentence extends Controller {
// 新增
  public async add() {
    const { ctx } = this;
    const result = await ctx.service.admin.sentence.add(ctx.request.body);
    ctx.body = result;
    ctx.status = 200;
  }

  // 分页
  public async find() {
    console.log('test--------------------------------');
    const { ctx } = this;
    const result = await ctx.service.admin.sentence.find(ctx.request.body);
    ctx.body = {
      status: '1',
      data: result,
    };
  }
  // 详情
  public async details() {
    const { ctx } = this;
    console.log('Article -> details ----------------> ctx', ctx.request.body);
    const result = await ctx.service.admin.sentence.details(ctx.request.body);
    ctx.body = {
      status: '1',
      success: 'true',
      data: result,
    };
  }
  // 编辑
  public async update() {
    const { ctx } = this;
    const { _id, book, content, author, bgImg } = ctx.request.body;
    const result = await ctx.service.admin.sentence.update({ _id }, { book, content, author, bgImg });
    ctx.body = result;
  }
  // 改变状态
  public async status() {
    const { ctx } = this;
    const { _id, status } = ctx.request.body;
    const result = await ctx.service.admin.sentence.status({ _id }, { status });
    ctx.body = result;
  }
  // 删除
  public async delete() {
    const { ctx } = this;
    const result = await ctx.service.admin.sentence.delOne(ctx.request.body);
    ctx.body = result;
  }
}

