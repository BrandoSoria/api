const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'l19540524',
    password: 'Soria0210',
    database: 'l19540524api',
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;