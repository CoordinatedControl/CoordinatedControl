var io = require('socket.io')(3002);

io.on('connection', function (socket) {
    socket.on('usonic', function (data) {
        console.log(data.usonic);
    });
    socket.on('rrid', function (data) {
        console.log(data.rrid);
    });
});
