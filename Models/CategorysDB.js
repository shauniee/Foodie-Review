"use strict"
var db = require('../db-connection');

class CategoryDB{
    getAllCategorys(request, respond){
        var sql = "SELECT * FROM data_dictionary.category";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
}
module.exports = CategoryDB;