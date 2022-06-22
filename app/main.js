const net = require("net");

const server = net.createServer(socket => {
  socket.on('data', (data) => {
    const command = data.toString();
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
