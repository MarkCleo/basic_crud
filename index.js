var express = require("express");
// var mysql = require("mysql");
var app = express();
var connection = require('./database');
const path = require('path');


    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/', function(req, res) {
        // let sql = "SELECT * FROM STUDENT_LIST";
        // connection.query(sql, function(err, results){
        //     if(err) throw err;
        //     res.send(results);
        // })
        res.sendFile(path.join(__dirname,'index.html'));

    });

    app.listen(3000, function(){
        console.log('App listing on port 3000')
        connection.connect(function(err){
            if(err) throw err;
            console.log("Database connected!");
        });
    })