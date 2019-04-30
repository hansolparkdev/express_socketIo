var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

console.log(__dirname);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
   console.log("connection")
})

server.listen(3000, function(){
  console.log(
    `
      socket IO server listen on port 3000
      server start
    `
  )
})
