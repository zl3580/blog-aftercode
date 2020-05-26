
// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('http');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createHandler = require('github-webhook-handler');
const spawn = require('child_process').spawn;
const handler = createHandler({ path: '/webhook', secret: 'blogAfter' });

let response = '';
function runCommand(cmd, args, callback) {
  const child = spawn(cmd, args);
  child.stdout.on('data', function(buffer) { response += buffer.toString(); });
  child.stdout.on('end', function() { callback(response); });
}

http.createServer(function(req, res) {
  res.end({ ...response });
  handler(req, res, function(err) {
    console.log('res---------', res);
    console.log('req-----------', req);
    console.log('err------------', err);
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(3000);
console.log('kslfjl');

handler.on('error', function(err) {
  console.error('Error----------:', err.message);
});

handler.on('push', function(event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
  console.log('监听到push事件');
  runCommand('sh', [ 'deploy.sh' ], function(txt) {
    console.log('txt', txt);
  });
});

