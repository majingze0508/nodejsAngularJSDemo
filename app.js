const express = require('express');
const app = express();
var users = require('./routes/users');
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.render('home', {title: 'Login Page'});
});

app.post('/users', users.getUser);
app.post('/users/register', users.addUser);
app.get('/main', function(req, res) {
	res.render('mainpage', {title: 'Library System Home Page', data: req.query})
});

app.listen(app.get('port'), function() {
	console.log('Server start');
});
