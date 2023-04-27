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

function startPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select from below please",
        name: "choice",
        choices: [
          "View Employees",
          "View Employees By Role",
          "View Employees By Department",
          "Update Employee",
          "Add Employee",
          "Add Role",
          "Add Department",
        ],
      },
      //functions
    ])
    .then(function (val) {
      switch (val.choice) {
        case "View Employees":
          viewEmployees();
          break;

        case "View Employees By Role":
          viewRoles();
          break;
        case "View Employees By Department":
          viewDepartments();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Update Employee":
          updateEmployee();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Department":
          addDepartment();
          break;
      }
    });
}
