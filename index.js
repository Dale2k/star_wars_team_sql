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
  database: "employee_tracker_DB",
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

// view employees
function viewEmployees() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startPrompt();
    }
  );
}

// view roles
function viewRoles() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startPrompt();
    }
  );
}

function viewDepartments() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startPrompt();
    }
  );
}
