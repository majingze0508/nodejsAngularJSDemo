const express = require('express');
const app = express();
const session = require('express-session');
const users = require('./routes/users');
const book = require('./routes/book');
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());
app.use(session({
  secret: 'recommand 128 bytes random string',
  cookie: { maxAge: 60 * 1000 }
}));

app.get('/', function(req, res){
	res.render('home', {title: 'Login Page'});
});

app.post('/users', users.getUser);
app.post('/users/register', users.addUser);
app.post('/book', book.searchBook);
app.get('/main', function(req, res) {
	res.render('mainpage', {title: 'Library System Home Page', data: req.query.username});
});
app.get('/books', function(req, res) {
	console.log(req.query.data);
	res.render('books', {title: 'Library System Book List', books: req.query.data});
})

app.use(function(req, res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
	//res.render('404');
});

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
	//res.render('500');
});
app.listen(app.get('port'), function() {
	console.log('Server start');
});
