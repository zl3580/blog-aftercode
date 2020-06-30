
import { Service } from 'egg';
import * as path from 'path';
// import sd from 'silly-datetime';
import mkdirp =require('mkdirp') ;


export default class PhotoService extends Service {
  // 上传
  /**
   * 获取文件上传目录
   * @param filename 文件名
   */
  async getUploadFile(filename) {
    // 2.创建图片保存的路径
    const dir = path.join(this.config.uploadDir);
    await mkdirp(dir); // 不存在就创建目录
    const date = Date.now(); // 毫秒数
    const random = Math.floor(Math.random() * (Math.floor(999) - Math.ceil(1) + 1)) + Math.ceil(1);
    // 返回图片保存的路径
    const uploadDir = path.join(dir, `${date}-${random}${path.extname(filename)}`);
    return {
      uploadDir,
      saveDir: this.ctx.origin + uploadDir.slice(3).replace(/\\/g, '/'),
    };
  }
  // 新增
  async add(params) {
    console.log('PhotoService -> add -> params', params);
    const {
      ctx,
    } = this;
    const result = await ctx.model.Photo.create(params);
    if (result._id) {
      const data = params.imgs.map(item => {
        return {
          ...item,
          photoContent: result._id,
          status: result.status,
        };
      });
      await ctx.model.PhotoList.create(data, function(error) {
        console.log('PhotoService -> add -> error', error);
      });
    }
    return {
      status: '1',
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
      .sort({ _id: -1 });
    return { list: result, count };
  }
  // id获取详情
  async details({ _id }) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Photo.find({ _id });
    const res = await ctx.model.PhotoList.find({ photoContent: _id }, { name: 1, url: 1 });
    const data = {
      _id: result[0]._id,
      city: result[0].city,
      address: result[0].address,
      introduce: result[0].introduce,
      time: result[0].time,
      imgs: res,
    };
    return data;
  }
  // 编辑
  async update(id, data) {
    console.log('update -> data', data);
    const {
      ctx,
    } = this;
    const result = await ctx.model.Photo.findOneAndUpdate(id, data);
    console.log('update -> result', result);
    if (result._id) {
      const data1 = data.imgs.map(item => {
        return {
          ...item,
          photoContent: id,
          status: result.status,
        };
      });
      await ctx.model.PhotoList.deleteMany({ photoContent: id });
      await ctx.model.PhotoList.create(data1, function(error) {
        console.log('PhotoService -> add -> error', error);
      });
      return {
        status: '1',
        data: {},
      };
    }

  }
  // 改变状态
  async status(id, data) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Photo.update(id, data);
    if (result.ok === 1) {
      const res = await ctx.model.PhotoList.updateMany({ photoContent: id }, data);
      if (res.ok === 1) {
        const data = {
          status: '1',
          data: {},
        };
        return data;
      }
    }

  }
  // 删除
  async delOne(params) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Photo.deleteOne(params);
    let res = {};
    if (result.deletedCount === 1) {
      res = {
        status: '1',
        data: {},
      };
    }
    return res;
  }
}

