const net = require("net");

const server = net.createServer(socket => {
  let count = 0;
  socket.on('data', (data) => {
    const command = data.toString();
    console.log('client sent command', command);
    handlePing(socket)
    // if (command === '+PING\r\n') {
    //   handlePing(socket)
    // }
    count++;
  });
  socket.pipe(socket);
});

const handlePing = (socket) => {
  socket.write('+PONG\r\n');
  console.log('server respond with PONG');
}

server.listen(6379, '127.0.0.1');
