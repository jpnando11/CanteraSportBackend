const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost', 
    user: 'root', 
    password: '',
    database: 'mydb',
    connectionLimit: 5
});

module.exports = pool;
