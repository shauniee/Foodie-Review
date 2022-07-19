"use strict"
const restaurantsdb = require("../Models/RestaurantsDB");
var restaurantsDBObject = new restaurantsdb();
function routeRestaurants(app){
    app.route('/restaurants')
        .get(restaurantsDBObject.getAllRestaurants)
        .post(restaurantsDBObject.addRestaurant)
    app.route('/restaurants/:id')
        .put(restaurantsDBObject.updateRestaurant)
        .delete(restaurantsDBObject.deleteRestaurant)
    app.route('/search')
        .post(restaurantsDBObject.searchRestaurants);
    app.route('/sortRatingAscending')
        .get(restaurantsDBObject.sortRatingsAscending);
    app.route('/sortAscending')
        .get(restaurantsDBObject.sortRestaurantsAscending);
    app.route('/averageRating/:restaurantName')
        .put(restaurantsDBObject.insertAverageRating);
    app.route('/filter')
        .post(restaurantsDBObject.filterLocation);
}
module.exports = {routeRestaurants};