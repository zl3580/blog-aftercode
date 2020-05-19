

// 解析用户的输入，处理后返回相应的结果
import { Controller } from 'egg';
export default class Home extends Controller {
  // 随机获取5条文章
  public async getArticle() {
    const { ctx } = this;
    const result = await ctx.service.front.home.getArticle();
    ctx.body = {
      status: '1',
      data: result,
    };
  }
  // 随机获取5条文章
  public async getPhoto() {
    const { ctx } = this;
    const result = await ctx.service.front.home.getPhoto();
    ctx.body = {
      status: '1',
      data: result,
    };
  }
}

