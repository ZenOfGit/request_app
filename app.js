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
mongoose.connect('mongodb://hgadmin:supersecret@ds119750.mlab.com:19750/heroku_sb93n45m');
//mongoose.connect('mongodb://localhost/requestdb');
let db = mongoose.connection;

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
    let user = req.body;
	User.addUser(user, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

// Update user route
app.put('/api/users/:_id', (req, res) => {
    let id = req.params._id;
    let user = req.body;
    User.updateUser(id, user, (err, user) => {
        if(err){
            throw err;
        }
        res.json(user);
    });
});

// Delete user route
app.delete('/api/users:_id', (req, res) => {
    let id = req.params._id;
    User.removeUser(id, (err, user) => {
        if(err){
            throw err;
        }
        res.json(user);
    });
});

// port chane for Heroku
let port = process.env.PORT || 3000;

// Server
app.listen(port, () => 
	console.log(`Listening on port ${port}...`));
	