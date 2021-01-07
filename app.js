const { prompt } = require('inquirer');
const { printTable } = require('console-table-printer');
const DB = require('./DB/DB')



function intialPrompt() {

    

    prompt([{
        message: 'What would you like to do?..',
        type: 'list',
        name: 'employeeMenu',

        choices: [
            'View All Employees',
            'View All Departments',
            'View All Roles',

            'Add employee',
            'Add role',
            'Add Department',
            // 'View all Departments',
            'End Program'
        ]
    }])

        .then((answers) => {
            switch (answers.employeeMenu) {
                case "View All Employees":
                    viewAllEmployees()
                    break;
                case "View All Departments":
                    viewAllDepartments();
                    break;

                // case 2:
                //     day = "Tuesday";
                //     break;
                // case 3:
                //     day = "Wednesday";
                //     break;
                // case 4:
                //     day = "Thursday";
                //     break;
                // case 5:
                //     day = "Friday";
                //     break;
                // case 6:
                //     day = "Saturday";
            }
        })
}

function viewAllEmployees() {
    DB.findAllEmployees().then(function(dbData) {
        // printTable(dbData)
        // console.log('HI')
        intialPrompt()
        printTable(dbData)
    })
}
function viewAllDepartments() {
    DB.findAllDepartments().then(function(dbData) {
        intialPrompt()
        
        printTable(dbData)
    })
}

intialPrompt();



// function viewDepts() {
//     inquirer.prompt([{
//         message: "What department do you want to view?",
//         type: 'list',
//         name: 'Department',
//         choices: [
//             'MArketing',
//             'Human Resource',
//             'Management',
//             'Sales'
//         ]

//     }])
//         .then((answers) => {
//             connection.query('SELECT employee.first_name, employee.last_name,
//                 department.name AS department
//                 FROM employee
//                 INNER JOIN role ON employee.role_id = role.role_id
//                 INNER JOIN department ON employee.role_id = department_id
//                 WHERE department.name = '${answers.dept}'`, (err, results) => {
//                     if (err) throw err;
//                     console.table(resluts);
                    
//                 })
//                 initialPrompt();
//             })

//         }
        
