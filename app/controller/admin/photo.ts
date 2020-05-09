

// 解析用户的输入，处理后返回相应的结果
import sendToWormhole = require('stream-wormhole');
import { Controller } from 'egg';
export default class Photo extends Controller {
// 上传
  public async upload() {
    const { ctx } = this;
    const parts = ctx.multipart();
    let part;
    // parts() 返回 promise 对象
    while ((part = await parts()) != null) {
      if (part.length) {
        // 这是 busboy 的字段
        console.log('------------------', part);
        console.log('field:--------------- ' + part[0]);
        console.log('value: ------------------' + part[1]);
        console.log('valueTruncated:---------------- ' + part[2]);
        console.log('fieldnameTruncated:------------- ' + part[3]);
      } else {
        if (!part.filename) {
          // 这时是用户没有选择文件就点击了上传(part 是 file stream，但是 part.filename 为空)
          // 需要做出处理，例如给出错误提示消息
          return;
        }
        // part 是上传的文件流
        console.log('field: -----------' + part.fieldname);
        console.log('filename:---------- ' + part.filename);
        console.log('encoding: -----------' + part.encoding);
        console.log('mime: -------------' + part.mime);
        // 文件处理，上传到云存储等等
        let result;
        try {
          result = await ctx.oss.put('egg-multipart-test/' + part.filename, part);
        } catch (err) {
          // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
          await sendToWormhole(part);
          throw err;
        }
        console.log(result);
      }
    }
    console.log('and we are done parsing the form!');
  }

}

