"use strict"
const myProfilesdb = require("../Models/MyProfilesDB");
var myProfilesDBObject = new myProfilesdb();
function routeMyProfiles(app){
    app.route('/myProfiles')
        .post(myProfilesDBObject.addMyProfiles)     
        .get(myProfilesDBObject.getAllProfiles);
    app.route('/myProfiles/:id')
        .put(myProfilesDBObject.updateMyProfiles)
        .delete(myProfilesDBObject.deleteMyProfiles);
    app.route('/savedRestaurant/:id')
        .put(myProfilesDBObject.addRestaurants);
}
module.exports = {routeMyProfiles};