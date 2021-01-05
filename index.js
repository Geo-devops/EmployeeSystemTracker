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
        }