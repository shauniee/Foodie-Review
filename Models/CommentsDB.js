"use strict"
var db = require('../db-connection');
const Comment = require('../models/Comment')

class CommentsDB{
    getAllComments(request, respond){
        var restaurant = request.body.restaurant_id;
        var sql = "SELECT * FROM data_dictionary.comments";
        db.query(sql, restaurant, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    addComment(request, respond){
        var now = new Date();
        var commentObject = new Comment(null, request.body.myprofile_id, request.body.restaurant_id, request.body.review, request.body.rating, request.body.foodImage, now.toString());
        var sql = "INSERT INTO data_dictionary.comments (myprofile_id, restaurant_id, review, rating, foodImage, datePosted) VALUES(?,?,?,?,?,?)";
        
        var values = [commentObject.getmyprofile_id(), commentObject.getRestaurantId(), commentObject.getReview(), commentObject.getRating(), commentObject.getFoodImage(), commentObject.getDatePosted()];
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
    updateComment(request, respond){
        var now = new Date();
                        
        var commentObject = new Comment(request.params.id, request.body.myprofile_id, request.body.restaurant_id, request.body.review,
                    request.body.rating, request.body.foodImage, now.toString());
                
        var sql = "UPDATE data_dictionary.comments SET review = ?, rating = ?, foodImage = ? WHERE comments_id = ?";
        var values = [commentObject.getReview(), commentObject.getRating(), commentObject.getFoodImage(), commentObject.getId()];
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
    deleteComment(request, respond){
        var commentID = request.params.id;
        var sql = "DELETE FROM data_dictionary.comments WHERE comments_id = ?";
        db.query(sql, commentID, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
            });
        }
    searchComment(request, respond){
        var searchcomments = request.params.id;
        var sql = "Select restaurant.restaurant_id, restaurant.restaurant, restaurant.foodType, restaurant.background, restaurant.location,restaurant.restaurantWebsite, restaurant.restaurantPhoneNumber, restaurant.restaurantRating, restaurant.image1, restaurant.image2, restaurant.image3,restaurant.awards, restaurant.websiteQR, restaurant.openingHours, myprofile.username, comments.review, comments.rating, comments.datePosted from restaurant inner join comments on comments.restaurant_id  = restaurant.restaurant_id inner join myprofile on myprofile.myprofile_id = comments.myprofile_id where comments.restaurant_id = ?"
        db.query(sql, searchcomments, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
            });
    }
    
}
module.exports = CommentsDB;