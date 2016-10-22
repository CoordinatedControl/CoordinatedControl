var io = require('socket.io')(3002);

var SensorData = exports = module.exports = function(callback){
	function receive(){
		io.on('connection', function (socket) {
		    socket.on('usonic', function (data) {
		        console.log(data.usonic);
		        /*callback({
                      usonic : usonic,
                      rrid : null
                    });*/

		    });
		    socket.on('rrid', function (data) {
		        console.log(data.rrid);
		        /*callback({
                      usonic : null,
                      rrid : rrid
                    });*/
		    });
		});
	}

	return {
		'receive': receive
	}
}
