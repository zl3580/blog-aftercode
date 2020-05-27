
// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('http');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createHandler = require('github-webhook-handler');
const spawn = require('child_process').spawn;
const handler = createHandler({ path: '/webhook', secret: 'blogAfter' });


http.createServer(function(req, res) {
  console.log('req-----------', req.body);
  res.end('成功');
  handler(req, res, function(err) {
    console.log('err------------', err);
    res.statusCode = 404;
    res.end('no such location');
  });

}).listen(7777);

handler.on('error', function(err) {
  console.error('Error----------:', err.message);
});

handler.on('push', function(event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
  const syncFile = spawn('C:/Program Files/Git/git-bash.exe', [ './deploy.sh' ]);
  syncFile.stdout.on('data', data => {
    console.log('stdout---------', data.toString());
  });

  syncFile.stderr.on('data', data => {
    console.log('stderr------------', data.toString());
  });

  syncFile.on('exit', code => {
    console.log(`子进程退出码：${code}`);
  });

});

