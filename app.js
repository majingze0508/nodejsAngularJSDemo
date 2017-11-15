const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home', {title: 'Library System Home Page'});
});

app.listen(app.get('port'), function() {
	console.log('Server start');
});
