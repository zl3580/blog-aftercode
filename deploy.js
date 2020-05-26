
// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('http');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createHandler = require('github-webhook-handler');
const exec = require('child_process').exec;
const handler = createHandler({ path: '/webhook', secret: 'blogAfter' });


function runCommand(cmd) {
  const child = exec(cmd);
  child.stdout.on('data', function(buffer) { console.log('标准输出：', buffer); });
  child.stdout.on('end', function() { console.log('标准输出：end'); });
}

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
  runCommand('sh deploy.sh');

});

