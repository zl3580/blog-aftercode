import { Controller } from 'egg';
export default class Menubar extends Controller {
  // 搜索
  public async search() {
    const { ctx } = this;
    const result = await ctx.service.front.menubar.search(ctx.request.body);
    ctx.body = {
      status: '1',
      data: result,
    };
  }
}
