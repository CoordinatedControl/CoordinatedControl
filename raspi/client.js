var io = require('./socket.io');
var socket = io.connect('http://localhost:3002');

console.log('connected to 3002')

socket.on('connect', function () {
    console.log('Connected to server successfully!');
    socket.emit('test', {test:'test'});
});

//do something here