import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    console.log('测试   git pull');
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi(ctx.request.body);
  }
}
