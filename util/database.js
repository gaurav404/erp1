const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'loginerp',
    password: 'Nits'
});

module.exports = pool.promise();
