"use strict"
var db = require('../db-connection');
const MyProfiles = require('../models/MyProfile')

class myProfileDB{
    getAllProfiles(request, respond){
        var username = request.body.username;
        var sql = "SELECT * FROM data_dictionary.myprofile WHERE username = ?";
        db.query(sql, username, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    addMyProfiles(request, respond){
        var now = new Date();
        var myProfileObject = new MyProfiles(null, request.body.username, request.body.profilepic, request.body.last_name, request.body.first_name, request.body.gender, request.body.address, request.body.phoneNumber, request.body.email, request.body.verified, now.toString(), request.body.followers, request.body.following, request.body.numberOfReviews, request.body.reviewTier, request.body.savedRestaurants, request.body.savedRestaurants1, request.body.savedRestaurants2);
        var sql = "INSERT INTO data_dictionary.myprofile (username, profilepic, last_name, first_name, gender, address, phoneNumber, email, verified, dateRegistered, followers, following, numberOfReviews, reviewTier, savedRestaurants, savedRestaurants1, savedRestaurants2) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        
        var values = [myProfileObject.getusername(), myProfileObject.getprofilepic(), myProfileObject.getlast_name(), myProfileObject.getfirst_name(), myProfileObject.getgender(), myProfileObject.getaddress(), myProfileObject.getphoneNumber(), myProfileObject.getemail(), myProfileObject.getverified(), myProfileObject.getdateRegistered(), myProfileObject.getfollowers(), myProfileObject.getfollowing(), myProfileObject.getnumberOfReviews(), myProfileObject.getreviewTier(), myProfileObject.getsavedRestaurants(), myProfileObject.getsavedRestaurants1(), myProfileObject.getsavedRestaurants2()];
        console.log(values);
       
        db.query(sql, values, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
              });
        }
    updateMyProfiles(request, respond){
        var now = new Date();
                            
        var myProfileObject = new MyProfiles(request.params.id, request.body.username, request.body.profilepic, request.body.last_name,
                    request.body.first_name, request.body.gender, request.body.address, request.body.phoneNumber, request.body.email, request.body.verified, now.toString(), request.body.followers, request.body.following, request.body.numberOfReviews, request.body.reviewTier, request.body.savedRestaurants, request.body.savedRestaurants1, request.body.savedRestaurants2);
                    
        var sql = "UPDATE data_dictionary.myprofile SET username = ?, profilepic = ?, address = ?, phoneNumber = ?, email = ? WHERE myprofile_id = ?";

        var values = [myProfileObject.getusername(), myProfileObject.getprofilepic(), myProfileObject.getaddress(), myProfileObject.getphoneNumber(), myProfileObject.getemail(), myProfileObject.getId()];
        console.log(values);
        db.query(sql, values, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
                });
        }
    deleteMyProfiles(request, respond){
        var myprofileID = request.params.id;
        var sql = "DELETE FROM data_dictionary.myprofile WHERE myprofile_id = ?";
        db.query(sql, myprofileID, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
            });
        }
    addRestaurants(request, respond){
        var now = new Date();
        var bookmarks = new MyProfiles(request.params.id, request.body.username, request.body.profilepic, request.body.last_name,
            request.body.first_name, request.body.gender, request.body.address, request.body.phoneNumber, request.body.email, request.body.verified, now.toString(), request.body.followers, request.body.following, request.body.numberOfReviews, request.body.reviewTier, request.body.savedRestaurants, request.body.savedRestaurants1, request.body.savedRestaurants2);

        var sql = "UPDATE data_dictionary.myprofile SET savedRestaurants = ?, savedRestaurants1 = ?, savedRestaurants2 = ? WHERE myprofile_id = ?";
        var values = [bookmarks.getsavedRestaurants(), bookmarks.getsavedRestaurants1(), bookmarks.getsavedRestaurants2(), bookmarks.getId()]
        console.log(values)
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);   
            }
            });
    }
}
module.exports = myProfileDB;