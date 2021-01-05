const inquirer = require('inquirer');
const mysql = require('mysql');
// const consoleTable = require('console.table');
const figlet = require('figlet'); 

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "password",
    database: "employeeCMS_DB"
});

 connection.connect( (err) => {
            if (err) {
                console.log('ERROR ' + err.stack);
                return
            }
            console.log('connected as id ${connection.threadId}');
        })

        function intialPrompt() {

            figlet('EMPLOYEE SYSTEM TRACKER', function (err, data) {
                if (err) { 
                    console.log("Something didn't work");
                    console.dir(err);
                    return;
                }
                console.log(chalk.red(data))
            });
        
            inquirer.prompt([{
                message: 'What employee do you want to look at?',
                type: 'list',
                name: 'choice',

                Choices: [
                'View All Employees',
               'View All Employees in Departments',
               'View All Roles',

               'Add employee',
               'Add role',
               'Add Department',
               'View all Departments',
               'End Program'
                ]
            }])
        
        .then((answers) => {
            if (answers.choice === 'view all employees') {
                viewAllEmployees(); 
            } else if (answers.choice ==='View all Employees in Departments'){
                viewByDepartment();
            }     
            else if (answers.choice === 'Exit Program') {
                exit();
                  }
             })
                      
        }

        initialPrompt();

        function viewAllEmployees() {
            connection.query('SELECT employee.first_name, employee.last_name, role.title AS Title, role.salary AS Salary,deparment.name AS Department
            FROM employee
                INNER JOIN role on employee.role_id=role.role_id
                INNER JOIN department ON employee.role_id=department.department_id', (err, result) => {
                    if (err) throw err;
                    console.table(results);

                })
        initialPrompt();
            }
            
            
            )