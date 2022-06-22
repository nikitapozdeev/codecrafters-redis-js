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
  });
});

const handlePing = (socket) => {
  socket.write('+PONG\r\n');
}

server.listen(6379, '127.0.0.1');
