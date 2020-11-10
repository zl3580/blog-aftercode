

// 解析用户的输入，处理后返回相应的结果
import { Controller } from 'egg';
// import jdenticon from 'jdenticon';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const jdenticon = require('jdenticon');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
import * as qiniu from 'qiniu';


const nameData = [ '我', '你', '他', '红', '黄', '蓝', '乒乓', '羽毛球', '花', '鸟', '书', '哈哈',
  '系', 'tian', 'jkk', 'df', '嘻嘻', '好啊', '嗯', '━((*′д｀)', '爻(′д｀*))━!!!!',
  '苦笑', '呲牙', '强颜欢笑', 'yy', '23', '78', '9', 'o', 'r', 'p' ];

export default class Message extends Controller {
  // 信息列表
  public async get() {
    const { ctx } = this;
    const result = await ctx.service.front.message.find(ctx.request.body);
    ctx.body = {
      status: '1',
      data: result,
    };
  }
  // 提交留言
  public async add() {
    const { ctx } = this;

    const size = 32;
    const value = nameData.splice(Math.floor(Math.random() * 10) + 1, 1).join('');
    const png = jdenticon.toPng(value, size);
    fs.writeFileSync('./icon.png', png);


    const accessKey = 'rz7tCNjxOcz5htavB4D5Y59yY-oZHLNufpYEtgnv';
    const secretKey = '4quhUrnOjqPjU--TARHbbAfRA52gQGGnMXtSMZKn';
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const options = {
      scope: 'zl-images',
      expires: 7200,
      returnBody: '{"key":"$(key)","hash":"$(etag)","name":"$(fname)"}',
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);

    const config = new qiniu.conf.Config();
    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();

    function upload(localFile, key) {
      return new Promise((resove, reject) => {
        // 文件上传
        formUploader.putFile(uploadToken, key, localFile, putExtra, async function(respErr,
          respBody, respInfo) {
          if (respErr) {
            throw respErr;
          }
          if (respInfo.statusCode === 200) {
            console.log('----------------------------', respBody);
            resove(respBody?.key);

          } else {
            reject(Error);
            console.log(respInfo.statusCode);
            console.log(respBody);
          }
        });
      });

    }
    const result1 = await upload('./icon.png', new Date().getMilliseconds());
    const data = {
      ip: ctx.ip,
      name: nameData.splice(Math.floor(Math.random() * 10) + 1, 3).join(''),
      avatar: ' https://cnd.lxzyl.cn/' + result1,
      ...ctx.request.body,
    };

    const result = await ctx.service.front.message.add(data);
    ctx.body = {
      status: '1',
      data: result,
    };

  }
}

