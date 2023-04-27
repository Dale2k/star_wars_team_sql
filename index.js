// Configuration
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_trackerDB",
});

// Connection
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected as Id");
  startPrompt();
});
