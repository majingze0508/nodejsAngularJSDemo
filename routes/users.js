var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Maziteng0309',
  database: 'testdb'
});


exports.getUser = function(req, res) {
	var user = req.body;
	if (!req.session.user || req.session.user !== user.username) {
		global.href = '/';
	}
	connection.query('SELECT * FROM users WHERE username = ? and password = ?', [user.username, user.password], function(err, results) {
	  if (err) throw err;
	  
	  if (results != '')
	  {
		  var response = { username: results[0].username };
		  req.session.user = results[0].username;
		  res.json(response);
	  }
	  else
      {
		  var response = { error: 'No record' };
	      res.send(404);
	  }	
	});
};

exports.addUser = function(req, res) {
	var user = req.body;
	connection.query('INSERT INTO users(username, password, role) SET username = ?, password = ?, role = ?', [user.username, user.password, user.role], function(err, results) {
	  if (err) throw err;
	  
	  if (results != '')
	  {
		  //var response = { username: results[0].username };
		  console.log(response);
		  res.json(response);
	  }
	  else
      {
		  var response = { error: 'No record' };
	      res.json(response);
	  }	
	});
};
