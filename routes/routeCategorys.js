"use strict"
const categorysdb = require("../Models/CategorysDB");
var categorysDBObject = new categorysdb();
function routeCategorys(app){
    app.route('/categorys')
        .get(categorysDBObject.getAllCategorys);
}
module.exports = {routeCategorys};