var mysql = require('mysql');
var connection = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'data_dictionary'
});
module.exports = connection;