const db = require("./config/db-config");

/*
List of CRUD methods.In result we create a endpoint

GET — /users | getUsers()
GET — /users/:id | getUserById()
POST — users | createUser()
DELETE — /users/:id | deleteUser()
*/

//GET all USERS
const getTasks = (req, res) => {
  var sql = "SELECT * FROM task ORDER BY id ASC";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Records selected");
    res.status(200).json(result);
  });
};

//GET USER by id
const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  var sql = `SELECT * FROM task WHERE id = ${id}`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record selected");
    res.status(200).json(result);
  });
};

//POST TASK
const createTask = (req, res) => {
  var content = req.body.content; //Content geting data
  var sql = `INSERT INTO task (content) VALUES ('${content}')`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted!");
    res.status(200).send(`Insert new task on ID:${result["insertId"]}`);
  });
};

//DELETE user
const deleteTask = (req, res) => {
  var content = req.body.content;
  var sql = `DELETE FROM task WHERE content = '${content}'`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record deleted!");
    res.status(200).send(result);
  });
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  deleteTask,
};
