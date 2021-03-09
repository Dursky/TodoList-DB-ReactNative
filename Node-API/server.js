const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const db = require("./queries");

const flash = require("connect-flash");
const session = require("express-session");
const port = 3000;

app.use(flash());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    secret: "test-page",
    saveUninitialized: true,
    resave: true,
  })
);

//Use a CRD method [Create Read DELETE]

app.get("/", db.getTasks); //Example: 127.0.0.1:3000
app.get("/:id", db.getTaskById); //Example: 127.0.0.1:3000/1
app.post("/add", db.createTask); // Example 127.0.0.1:3000/add/ JSON BODY {"content":"xyz"}
app.delete("/delete", db.deleteTask); // Example 127.0.0.1:3000/delete JSON BODY {"content":"xyz"}

app.listen(port, () => {
  console.log(`Run at 127.0.0.1:${port}`);
});

module.exports = app;
