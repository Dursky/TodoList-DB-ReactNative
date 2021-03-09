const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "192.168.0.201",
  database: "TODO-LIST",
  user: "root",
  password: "root",
  port: "3306",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
