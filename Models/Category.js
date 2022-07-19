"use strict";
class Category {
constructor(category_id, nearestToYou, healthy, popular, promotion, valueForMoney) {
    this.category_id = category_id;
    this.nearestToYou = nearestToYou;
    this.healthy = healthy;
    this.popular = popular;
    this.promotion = promotion;
    this.valueForMoney =valueForMoney;
}
getcategory_id() {
    return this.category_id;
}
getnearestToYou() {
    return this.nearestToYou;
}
gethealthy() {
    return this.healthy;
}
getpopular() {
    return this.popular;
}
getpromotion() {
    return this.promotion;
}
getvalueForMoney() {
    return this.valueForMoney;
}
}