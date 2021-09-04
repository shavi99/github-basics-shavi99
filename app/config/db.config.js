import mysql from "mysql2";
   
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'emp_db'
});
  
export default db;