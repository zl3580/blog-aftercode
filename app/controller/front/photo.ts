

// 解析用户的输入，处理后返回相应的结果
import { Controller } from 'egg';
export default class Photo extends Controller {

  // 照片列表
  public async find() {
    const { ctx } = this;
    const result = await ctx.service.front.photo.find(ctx.request.body);
    ctx.body = {
      status: '1',
      data: result,
    };
  }

}

