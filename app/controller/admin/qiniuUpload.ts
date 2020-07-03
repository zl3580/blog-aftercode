

// 解析用户的输入，处理后返回相应的结果
import * as qiniu from 'qiniu';
import { Controller } from 'egg';
export default class Photo extends Controller {
  public getUploadKey() {
    const accessKey = 'rz7tCNjxOcz5htavB4D5Y59yY-oZHLNufpYEtgnv';
    const secretKey = '4quhUrnOjqPjU--TARHbbAfRA52gQGGnMXtSMZKn';
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const options = {
      scope: 'zl-images',
      expires: 7200,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    const { ctx } = this;
    ctx.body = {
      data: uploadToken, status: '1',
    };
  }
}

