

// 复杂数据的处理，比如要展现的信息需要从数据库获取，还要经过一定的规则计算，才能返回用户显示。或者计算完成后，更新到数据库。
import { Service } from 'egg';
// import fs = require('mz/fs');
import * as path from 'path';
import * as fs from 'fs';
import * as rl from 'readline';
export default class SentenceService extends Service {
  // 操作logs文件
  async get() {
    const file = path.resolve('E:/zl-workspace/blog-egg/logs/blog-egg/blog-egg-web.json.log');
    const fsr = await fs.createReadStream(file, { flags: 'r+', // 读取方式
      encoding: 'utf8', // 指定编码集
      autoClose: true, // 是否自动关闭
      start: 0, // 读取开始位置
      end: Infinity, // 读取结束位置
      // highWaterMark: 100, // 一次最多读取几个字节});
    });
    const readline = rl.createInterface({
      input: fsr,
    });
    const res = [];
    const data = await new Promise(resolve => {
      readline.on('line', function(line: any) {
      // @ts-ignore
        res.push(line);
        resolve(res);
        console.log('res---------:' + res);
      });
    });
    // const res = new Promise(resolve => {
    //   fsr.on('open', function() {
    //     console.log('开始读取文件：');
    //   });
    //   fsr.on('data', data => { resolve(data); });
    //   fsr.on('end', function() {
    //     console.log('文件已全部读取完毕。');
    //   });
    // });


    // 按行读取

    console.log('data-------------', data);
    return data;

  }
}
