const { createConnection } = require('mysql2');
const connection = createConnection({
    host: 'localhost',
    user: 'guru_shifu_user',
    password: 'password',
    database: 'biblioteca',
    port: '3306',
    connectionLimit: 10
});

module.exports = connection;