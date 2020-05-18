

// 解析用户的输入，处理后返回相应的结果
import sendToWormhole = require('stream-wormhole');
import fs = require('mz/fs');
import pump = require('pump');
import { Controller } from 'egg';
export default class Photo extends Controller {
// 上传
  public async upload() {
    const { ctx } = this;
    const parts = ctx.multipart();
    let files = {};
    const data: any = [];
    let part;
    while ((part = await parts()) != null) {
      if (part.length) {
        // 这是 busboy 的字段
      } else {
        if (!part.filename) {
          ctx.throw('请选择上传的图片!');
          return;
        }
        // part 是上传的文件流
        const fieldname = part.filename;
        // 上传图片的目录
        const dir = await ctx.service.admin.photo.getUploadFile(fieldname);
        const target = dir.uploadDir;
        const writeStream = fs.createWriteStream(target);
        // 文件处理，上传到云存储等等
        try {
          await pump(part, writeStream);
        } catch (err) {
          // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
          await sendToWormhole(part);
          throw err;
        }
        files = Object.assign(files, {
          [fieldname]: dir.saveDir,
        });
        data.push({ name: fieldname, url: dir.saveDir });
        ctx.body = {
          status: '1',
          success: 'true',
          data,
        };
        // ctx.set({ 'Content-Type': ' multipart / form - data' });
      }
    }
  }

  // 新增
  public async add() {
    const { ctx } = this;
    console.log('Photo -> add -> ctx---------------------------', ctx);
    const result = await ctx.service.admin.photo.add(ctx.request.body);
    ctx.body = result;
    ctx.status = 200;
  }
  // 分页
  public async find() {
    const { ctx } = this;
    const result = await ctx.service.admin.photo.find(ctx.request.body);
    ctx.body = {
      status: '1',
      success: 'true',
      data: result,
    };
  }
  // 详情
  public async details() {
    const { ctx } = this;
    const result = await ctx.service.admin.photo.details(ctx.request.body);
    ctx.body = {
      status: '1',
      success: 'true',
      data: result,
    };
  }
  // 编辑
  public async update() {
    const { ctx } = this;
    const { _id, address, time, introduce, imgs } = ctx.request.body;
    const result = await ctx.service.admin.photo.update({ _id }, { address, time, introduce, imgs });
    ctx.body = result;
  }
  // 改变状态
  public async status() {
    const { ctx } = this;
    const { _id, status } = ctx.request.body;
    const result = await ctx.service.admin.photo.status({ _id }, { status });
    ctx.body = result;
  }
  // 删除
  public async delete() {
    const { ctx } = this;
    const result = await ctx.service.admin.photo.delOne(ctx.request.body);
    ctx.body = result;
  }
}

