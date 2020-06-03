/**
 * 获取请求url
 *
 */
import { Controller } from 'egg';
export default class Authority extends Controller {
  public async authority() {
    const { ctx } = this;
    let msg;
    let status;
    if (ctx.request.header.host !== '47.99.159.40') {
      if (ctx.request.body.username !== 'zhouli') {
        msg = '请输入正确的用户名';
        status = '0';
      }
      if (ctx.request.body.password !== '123029') {
        msg = '请输入正确的密码';
        status = '0';
      }
      if (ctx.request.body.password !== '123029' && ctx.request.body.username !== 'zhouli') {
        msg = '请输入正确的用户名和密码';
        status = '0';
      }
      if (ctx.request.body.password === '123029' && ctx.request.body.username === 'zhouli') {
        msg = '';
        status = '1';
      }
      ctx.body = {
        status,
        message: msg,
        data: {},
      };
    } else {
      ctx.body = {
        status: '1',
        data: {},
      };
    }

  }
}
