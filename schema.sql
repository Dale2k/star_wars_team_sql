--CREATE DATABASE
DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

-- DEPARTMENT TABLE
CREATE TABLE department (
  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

-- ROLE TABLE
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- EMPLOYEE ROLE TABLE
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- SEEDS
INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 15000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Lead", 20000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 25000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 30000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 35000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 40000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 45000, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jessica", "Haberkorn", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Robert", "Plant", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Mia","Klunis",null,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Ashton", "Kutcher", 1, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Milla", "Jovovich", 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Minatozaki", "Sana", 1, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Momo", "Hirai", 2, 7);

-- RETRIEVE DATA
SELECT * FROM role;
SELECT * FROM department;
SELECT * FROM employee;