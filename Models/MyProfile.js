"use strict";
class MyProfile {
constructor(myprofile_id, username, profilepic, last_name, first_name, gender, address, phoneNumber, email, verified, dateRegistered, followers, following, numberOfReviews, reviewTier, savedRestaurants, savedRestaurants1, savedRestaurants2){
    this.myprofile_id = myprofile_id;
    this.username = username;
    this.profilepic = profilepic;
    this.last_name = last_name;
    this.first_name = first_name;
    this.gender = gender;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.verified = verified;
    this.dateRegistered = dateRegistered;
    this.followers = followers;
    this.following = following;
    this.numberOfReviews = numberOfReviews;
    this.reviewTier = reviewTier;
    this.savedRestaurants = savedRestaurants;
    this.savedRestaurants1 = savedRestaurants1;
    this.savedRestaurants2 = savedRestaurants2;
}
getId() {
    return this.myprofile_id;
}
getusername() {
    return this.username;
}
getprofilepic() {
    return this.profilepic;
}
getlast_name() {
    return this.last_name;
}
getfirst_name() {
    return this.first_name;
}
getgender() {
    return this.gender;
}
getaddress() {
    return this.address;
}
getphoneNumber() {
    return this.phoneNumber;
}
getemail() {
    return this.email;
}
getverified() {
    return this.verified;
}
getdateRegistered() {
    return this.dateRegistered;
}
getfollowers() {
    return this.followers;
}
getfollowing() {
    return this.following;
}
getnumberOfReviews() {
    return this.numberOfReviews;
}
getreviewTier() {
    return this.reviewTier;
}
getsavedRestaurants() {
    return this.savedRestaurants;
}
getsavedRestaurants1() {
    return this.savedRestaurants1;
}
getsavedRestaurants2() {
    return this.savedRestaurants2;
}
setusername() {
    this.username;
}
setprofilepic() {
    this.profilepic;
}
setaddress() {
    this.address;
}
setphoneNumber() {
    this.phoneNumber;
}
setemail() {
    this.email;
}
}
module.exports = MyProfile;