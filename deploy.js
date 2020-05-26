
// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('http');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createHandler = require('github-webhook-handler');
const exec = require('child_process').execFile;
const handler = createHandler({ path: '/webhook', secret: 'blogAfter' });


http.createServer(function(req, res) {
  res.end('成功');
  handler(req, res, function(err) {
    console.log('err------------', err);
    res.statusCode = 404;
    res.end('no such location');
  });

}).listen(3000);

handler.on('error', function(err) {
  console.error('Error----------:', err.message);
});

handler.on('push', function(event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);

  console.log('process.env.PATH', process.env.PATH);
  exec('deploy.sh', {
    encoding: 'utf8',
    maxBuffer: 200 * 1024 * 1000, // 注意这个maxBuffer,作者在这里踩到过坑  因为项目更新 代码量越来越多  打包脚本输入的日志也越来越多 maxBuffer默认值已经不够了 这时需要你扩大它的值
  }, function(err, stdout) {
    console.log('err', err);
    console.log('stdout', stdout);
  });
});

