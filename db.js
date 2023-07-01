// import * as mysql from 'mysql';

// export const db = mysql.createPool({
//   connectionLimit: 100,
//   host: 'localhost',
//   user: 'root',
//   password: 'anu@123',
//   database: 'blogs'
// });
require('dotenv').config();
const Pool = require('pg').Pool;

 const pool = new Pool({
  // user: process.env.PG_USER,
  // host: process.env.PG_HOST,
  // password: process.env.PG_PASSWORD,
  // database: process.env.PG_DATABASE,
  // port: process.env.PG_PORT
  connectionString: process.env.DB_link,
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool;



