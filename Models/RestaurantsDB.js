"use strict"
var db = require('../db-connection');
const Restaurant = require('../models/Restaurant')

class RestaurantDB{
    getAllRestaurants(request, respond){
        var sql = "SELECT * FROM data_dictionary.restaurant";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    addRestaurant(request, respond){
        var restaurantObject = new Restaurant(null, request.body.category_id, request.body.restaurant, request.body.foodType, request.body.background, request.body.location, request.body.restaurantWebsite, request.body.restaurantPhoneNumber, request.body.restaurantRating, request.body.image1, request.body.image2, request.body.image3, request.body.awards, request.body.websiteQR, request.body.openingHours);
        var sql = "INSERT INTO data_dictionary.restaurant (category_id, restaurant, foodType, background, location, restaurantWebsite, restaurantPhoneNumber, restaurantRating, image1, image2, image3, awards, websiteQR, openingHours) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        
        var values = [restaurantObject.getCategory_id(), restaurantObject.getRestaurant(), restaurantObject.getFoodType(), restaurantObject.getBackground(), restaurantObject.getLocation(), restaurantObject.getRestaurantWebsite(), restaurantObject.getRestaurantPhoneNumber(), restaurantObject.getRestaurantRating(), restaurantObject.getImage1(), restaurantObject.getImage2(), restaurantObject.getImage3(), restaurantObject.getAwards(), restaurantObject.getWebsiteQR(), restaurantObject.getOpeningHours()];
       
        db.query(sql, values, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
              });
        }
    updateRestaurant(request, respond){
        var now = new Date();
                    
        var restaurantObject = new Restaurant(request.params.id, request.body.category_id, request.body.Restaurant, request.body.foodType,
                request.body.background, request.body.location, request.body.restaurantWebsite, request.body.getRestaurantPhoneNumber,
                request.body.restaurantRating, request.body.image1, request.body.image2, request.body.image3, request.body.awards,
                request.body.websiteQR, request.body.openingHours, now.toString());
            
        var sql = "UPDATE data_dictionary.restaurant SET image1 = ?, image2 = ?, image3 = ? WHERE restaurant_id = ?";
        var values = [restaurantObject.getImage1(), restaurantObject.getImage2(), restaurantObject.getImage3(), restaurantObject.getId()];
        db.query(sql, values, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
                });
        }
    deleteRestaurant(request, respond){
        var restaurantID = request.params.id;
        var sql = "DELETE FROM data_dictionary.restaurant WHERE restaurant_id = ?";
        db.query(sql, restaurantID, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
            });
        }
    searchRestaurants(request, respond){
        var searchTerm = request.body.search;
        var key = "%" + searchTerm + "%";
        var sql = "SELECT * FROM data_dictionary.restaurant WHERE restaurant LIKE ?";
        db.query(sql, [key], function(error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
            });
        }
    sortRatingsAscending(request, respond){
        var sql = "SELECT * FROM data_dictionary.restaurant ORDER BY restaurantRating DESC";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    sortRestaurantsAscending(request, respond){
        var sql = "SELECT * FROM data_dictionary.restaurant ORDER BY restaurant ASC";
        db.query(sql, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    insertAverageRating(request, respond){
        var restaurantName = request.params.restaurantName;
        var sql = "UPDATE restaurant SET restaurantRating = (SELECT AVG(rating) as averageRating FROM data_dictionary.comments WHERE restaurant = ?) WHERE restaurant = ?"
        var values = [restaurantName,restaurantName];
        console.log(values);
        db.query(sql, values, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }
    
    filterLocation(request, respond){
        var restaurantID = request.body.nearestToYou;
        var sql = "SELECT category.nearestToYou, restaurant.restaurant_id, restaurant.restaurant, restaurant.category_id, restaurant.foodType, restaurant.background, restaurant.location,restaurant.restaurantWebsite, restaurant.restaurantPhoneNumber, restaurant.restaurantRating, restaurant.image1, restaurant.image2, restaurant.image3,restaurant.awards, restaurant.websiteQR, restaurant.openingHours FROM category RIGHT JOIN restaurant ON category.category_id = restaurant.category_id WHERE nearestToYou = ?"
        db.query(sql, restaurantID, function(error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }   
}
module.exports = RestaurantDB;