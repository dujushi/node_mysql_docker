const http = require('http');

const server = http.createServer((request, response) => {

  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host : 'mysql',
    user : 'root',
    password : 'password',
    database : 'mysql'
  });
  connection.connect();
  connection.query('select * from user', (error, results, fields) => {
    if (error) throw error
    console.log('Results: ', results);
  });
  connection.end();

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World");
});
server.listen(80);
