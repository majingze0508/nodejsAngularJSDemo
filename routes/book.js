var mysql      = require('mysql');
var querystring = require('querystring');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Maziteng0309',
  database: 'testdb'
});

exports.searchBook = function(req, res) {
	var book = req.body;
	connection.query('SELECT * FROM book WHERE title = ?', book.title, function(err, results) {
	  if (err) throw err;
	  
	  if (results != '')
	  {
		var books = [];
		for(var i = 0; i < results.length; i++) {
			var book = {
				title: results[i].title,
				bId: results[i].bId,
				isbn: results[i].ISBN,
				author: results[i].author,
				publisher: results[i].publisher,
				category: results[i].category,
				price: results[i].price,
				quantity: results[i].quantity,
				history: results[i].history
			};
			books.push(book);
		}
		res.json({books: books});
	  }
	  else
      {
		  var response = { error: 'No record' };
	      res.send(404);
	  }	
	});
};