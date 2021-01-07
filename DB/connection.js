const mysql = require('mysql');
const util = require('util')


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "password",
    database: "employeeCMS_DB"
});

 connection.connect( (err) => {
            if (err) {
                console.log('ERROR', err.stack);
                return
            }
            console.log(`connected as id ${connection.threadId}`);
        })

    connection.query = util.promisify(connection.query)

    module.exports = connection;