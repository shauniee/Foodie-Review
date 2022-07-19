"use strict";
class Comment {
constructor(comments_id, myprofile_id, restaurant_id, review, rating, foodImage, datePosted) {
this.comments_id = comments_id;
this.myprofile_id = myprofile_id;
this.restaurant_id = restaurant_id;
this.review = review;
this.rating = rating;
this.foodImage = foodImage;
this.datePosted = datePosted;
}
getId() {
    return this.comments_id;
}
getRestaurantId() {
    return this.restaurant_id;
}
getmyprofile_id() {
    return this.myprofile_id;
}
getReview() {
    return this.review;
}
getRating() {
    return this.rating;
}
getFoodImage() {
    return this.foodImage;
}
getDatePosted() {
    return this.datePosted;
}
setRestaurantId() {
    this.restaurant_id;
}
setmyprofile_id() {
    this.myprofile_id;
}
setReview() {
    this.review;
}
setRating() {
    this.rating;
}
setFoodImage() {
    this.foodImage;
}
}
//add the set and get methods here
module.exports = Comment;
