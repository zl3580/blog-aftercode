
import { Service } from 'egg';
import * as path from 'path';
// import sd from 'silly-datetime';
import mkdirp =require('mkdirp') ;


export default class PhotoService extends Service {
  // 上传
  /**
   * 获取文件上传目录
   * @param {*} filename
   */
  async getUploadFile(filename) {
    // 2.创建图片保存的路径
    const dir = path.join(this.config.uploadDir);
    await mkdirp(dir); // 不存在就创建目录
    const date = Date.now(); // 毫秒数
    // 返回图片保存的路径
    const uploadDir = path.join(dir, date + path.extname(filename));
    // app\public\avatar\upload\20200312\1536895331666.png
    return {
      uploadDir,
      saveDir: this.ctx.origin + uploadDir.slice(3).replace(/\\/g, '/'),
    };
  }
  // 新增
  async add(params) {
    const {
      ctx,
    } = this;
    await ctx.model.Article.create(params);
    return {
      status: '1',
      success: 'true',
      data: { },
    };
  }
  // 分页
  async find({ pageSize, pageNum }) {
    const {
      ctx,
    } = this;
    const count = await (await ctx.model.Photo.find()).length;
    const result = await ctx.model.Photo.find().skip(pageSize * (pageNum - 1)).limit(parseInt(pageSize))
      .sort({ updatedAt: -1 });
    return { list: result, count };
  }
}

