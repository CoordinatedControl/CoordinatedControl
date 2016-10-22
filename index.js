// Imports
var ImageProcessing = require('./lib/ImageProcessing');
var ArDroneController = require('./controller/ardrone');
var arDrone = require('ar-drone');
var client = arDrone.createClient({ip: '192.168.1.10'});
console.log('Connected to client');
var pngStream = client.getPngStream();

var SumoController = require('./controller/sumo');

// Initialize ArDroneController
var arDroneController = ArDroneController();

// Initialize SumoController
var sumoController = SumoController();

//Start Sumo
sumoController.move();

// Initialize Image Processing
var imageProcessing = ImageProcessing(pngStream, arDroneController.move);

// FAILSAFES
process.on("SIGINT", function(){
	client.land();
	setTimeout(function() {
		process.exit();
	}, 1000);
});

process.on("exit", function(){
	client.land();
	setTimeout(function() {
		process.exit();
	}, 1000);
});

process.on("uncaughtException", function(){
	client.land();
	setTimeout(function() {
		process.exit();
	}, 1000);
});

// Takeoff drone
client.takeoff();

//Start Image Processing
imageProcessing.start();