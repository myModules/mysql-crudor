var mysql = require('mysql');


function Simple(){
   this.host: 
   this.
}

Simple.prototype.createConnection = function(opt){
   if(typeof opt !== 'object'){
      throw new Error('arguments must be a json object');
   }
   return new Simple() 
}

//继承mysql的方法
Simple.prototype.createConnection = mysql.createConnection;
Simple.prototype.connect          = mysql.connect;


Simple.prototype.connect = function(){
   mysql.connect();
}














var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();
