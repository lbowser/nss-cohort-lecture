var http = require('http');
var connect = require('connect');
var directory = 'public';
var port = 3013;
//var port = process.env.PORT;

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static(directory));

http.createServer(app).listen(port, function(){
  console.log('Node server listening. Port: ' + port + ', Directory: ' + directory);
});

