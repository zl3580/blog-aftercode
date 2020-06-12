/**
 * 获取请求url
 *
 */
import { Controller } from 'egg';
export default class Login extends Controller {
  public async login() {
    const { ctx, app } = this;
    let msg;
    let status;
    let token;

    console.log('ctx.request.body------------------', ctx.request.body);
    const result = await ctx.service.login.login(ctx.request.body);
    console.log('Login -> login -> result', result);
    if (result !== null) {
      // 生成 token 的方式
      token = app.jwt.sign({
        username: result.username, // 需要存储的 token 数据
        password: result.password,
      }, app.config.jwt.secret, {
        expiresIn: '60m', // 时间
      });
      console.log('token-------', token);
      // token 存入user表中
      const result1 = await ctx.service.login.token({ _id: result._id, token });
      console.log('Login -> login -> result1', result1);
      msg = '';
      status = '1';
    } else {
      msg = '请输入用户名和密码';
      status = '0';
      token = '';
    }
    ctx.body = {
      status,
      message: msg,
      data: result,
      token,
    };
  }
}
