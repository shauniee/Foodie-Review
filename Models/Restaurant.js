"use strict";
class Restaurant {
constructor(restaurant_id, category_id, restaurant, foodType, background, location, restaurantWebsite, restaurantPhoneNumber, restaurantRating, image1, image2, image3, awards, websiteQR,openingHours) {
	this.restaurant_id = restaurant_id;
	this.category_id = category_id;
	this.restaurant = restaurant;
	this.foodType = foodType;
	this.background = background;
	this.location = location;
	this.restaurantWebsite = restaurantWebsite;
	this.restaurantPhoneNumber = restaurantPhoneNumber;
	this.restaurantRating = restaurantRating;
	this.image1 = image1;
	this.image2 = image2;
	this.image3 = image3;
	this.awards = awards;
	this.websiteQR = websiteQR;
	this.openingHours = openingHours;
}
getId() {
    return this.restaurant_id;
}
getCategory_id() {
    return this.category_id;
}
getRestaurant() {
    return this.restaurant;
}
getFoodType() {
    return this.foodType;
}
getBackground() {
    return this.background;
}
getLocation() {
    return this.location;
}
getRestaurantWebsite() {
    return this.restaurantWebsite;
}
getRestaurantPhoneNumber() {
    return this.restaurantPhoneNumber; 
}
getRestaurantRating() {
    return this.restaurantRating;
}
getImage1() {
    return this.image1;
}
getImage2() {
    return this.image2;
}
getImage3() {
    return this.image3;
}
getAwards() {
    return this.awards;
}
getWebsiteQR() {
    return this.websiteQR;
}
getOpeningHours() {
    return this.openingHours;
}
}
//add the get methods here
module.exports = Restaurant;