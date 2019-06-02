const express = require('express');
const app = express();
const http = require('http');

// db
const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/local';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// server

const shiftRouter = require('./routes/api_shifts');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//CORS
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "*");
	next();
});

app.use('/api/shifts', shiftRouter);

const server = http.createServer(app);
server.listen(3000, function () {
	console.log('app listening on port 3000!')
});
server.on('error', onError);
function onError(error) {
	console.error(`error`);
	//needs decent error handling
}


//TODO: fix this file struct cuz it's kinda crazy and all over the place MARIA INÊS :/