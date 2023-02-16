
// You will need to install the mysql package first

const mysql = require('mysql2');

// Create Connection Object
const connectDatabase = () => {
    mysql.createConnection({
        host: 'localhost',
        user: 'guru_shifu_user',
        password: 'password',
        database: 'biblioteca',
        port: '3306'
    }).connect((err) => {
        if (err) throw err;
        console.log('Connected to the mysql database.');
    });
}
module.exports = connectDatabase;