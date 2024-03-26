// const { 
//     createPool 
// } = require('mysql');

// const pool = createPool({
//     host:"localhost",
//     user:"root",
//     password:"test",
//     database:"testdb",
//     connectionLimit:10
// });

// pool.query(`select * from registration`, (err, result, fields) =>{
//     if(err){
//         return console.log(err);
//     }
//     return console.log(result);
// })

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'127.0.0.1',
    database:'testdb',
    user:'root',
    password:'password'
});

module.exports = connection;