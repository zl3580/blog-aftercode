import http from 'http';
import createHandler from 'github-webhook-handler';
import { spawn } from 'child_process';
const handler = createHandler({ path: '/webhook', secret: 'blogAfter' });


function runCommand(cmd, args, callback) {
  const child = spawn(cmd, args);
  let response = '';
  child.stdout.on('data', function(buffer) { response += buffer.toString(); });
  child.stdout.on('end', function() { callback(response); });
}

http.createServer(function(req, res) {
  handler(req, res, function(err) {
    console.log('err', err);
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(7777);

handler.on('error', function(err) {
  console.error('Error:', err.message);
});

handler.on('push', function(event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
  runCommand('sh', [ './deploy.sh' ], function(txt) {
    console.log(txt);
  });
});

