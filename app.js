const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Specify static folder as public directory
app.use(express.static(__dirname+'/client'));

// Middleware for body-parser
app.use(bodyParser.json());

// Add objects
User = require('./models/user');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/requestdb')
var db = mongoose.connection;

// Home route
app.get('/', (req, res) => {
	res.send('Request App');
});

// Get users route
app.get('/api/users', (req, res) => {
	User.getUsers((err, users) => {
		if(err){
			throw err;
		}
		res.json(users);
	});
});

// Get user by ID route
app.get('/api/users/:_id', (req, res) => {
	User.getUserById(req.params._id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

// Add user route
app.post('/api/users', (req, res) => {
	var user = req.body;
	User.addUser(user, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.listen(3000);
console.log('Running on port 3000...');