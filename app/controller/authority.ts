/**
 * 获取请求url
 *
 */
import { Controller } from 'egg';
export default class Authority extends Controller {
  public async authority() {
    const { ctx } = this;
    if (!ctx.request.body.token) {
      ctx.body = {
        status: '0',
        data: {},
      };
    } else {
      const result = await ctx.service.authority.authority(ctx.request.body);
      console.log('Authority -> authority -> result', result);
      if (ctx.request.body.token === result.token) {
        ctx.body = {
          status: '1',
          data: {},
        };
      } else {
        ctx.body = {
          status: '0',
          data: {},
        };
      }
    }

  }
}
