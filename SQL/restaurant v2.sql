/*CREATE TABLE IF NOT EXISTS data_dictionary.restaurant (
	'restaurant_id' INT,
    'category_id' INT,
    'restaurant' VARCHAR(100) CHARACTER SET utf8,
    'foodType' VARCHAR(20) CHARACTER SET utf8,
    'background' VARCHAR(150) CHARACTER SET utf8,
    'location' VARCHAR(60) CHARACTER SET utf8,
    `restaurantWebsite` VARCHAR(100) CHARACTER SET utf8,
    `restaurantPhoneNumber` VARCHAR(45) CHARACTER SET utf8,
	`restaurantRating` DECIMAL CHARACTER SET utf8,
	`image1` VARCHAR(45) CHARACTER SET utf8,
	`image2` VARCHAR(45) CHARACTER SET utf8,
	`image3` VARCHAR(45) CHARACTER SET utf8,
	`awards` VARCHAR(45) CHARACTER SET utf8,
	`websiteQR` VARCHAR(45) CHARACTER SET utf8,
	`openingHours` VARCHAR(45) CHARACTER SET utf8
);*/
use data_dictionary;

CREATE TABLE IF NOT EXISTS data_dictionary.restaurant (
    `restaurant_id` INT NOT NULL AUTO_INCREMENT,
    `category_id` INT,
    `restaurant` VARCHAR(100) CHARACTER SET utf8,
    `foodType` VARCHAR(20) CHARACTER SET utf8,
    `background` VARCHAR(150) CHARACTER SET utf8,
    `location` VARCHAR(60) CHARACTER SET utf8,
    `restaurantWebsite` VARCHAR(100) CHARACTER SET utf8,
    `restaurantPhoneNumber` VARCHAR(45) CHARACTER SET utf8,
	`restaurantRating` DECIMAL,
	`image1` VARCHAR(45) CHARACTER SET utf8,
	`image2` VARCHAR(45) CHARACTER SET utf8,
	`image3` VARCHAR(45) CHARACTER SET utf8,
	`awards` VARCHAR(45) CHARACTER SET utf8,
	`websiteQR` VARCHAR(45) CHARACTER SET utf8,
	`openingHours` VARCHAR(45) CHARACTER SET utf8,
  PRIMARY KEY (`restaurant_id`),
  UNIQUE INDEX `restaurant_UNIQUE` (`restaurant` ASC) ,
  UNIQUE INDEX `restaurantWebsite_UNIQUE` (`restaurantWebsite` ASC) ,
  UNIQUE INDEX `websiteQR_UNIQUE` (`websiteQR` ASC) ,
  UNIQUE INDEX `background_UNIQUE` (`background` ASC) ,
  UNIQUE INDEX `location_UNIQUE` (`location` ASC) ,
  UNIQUE INDEX `awards_UNIQUE` (`awards` ASC) ,
  INDEX `category_id_idx` (`category_id` ASC) ,
  UNIQUE INDEX `phoneNumber_UNIQUE` (`restaurantPhoneNumber` ASC) ,
  UNIQUE INDEX `restaurant_id_UNIQUE` (`restaurant_id` ASC) ,
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `data_dictionary`.`Category` (`category_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

INSERT INTO restaurant (`restaurant_id`, `category_id`, `restaurant`, `foodType`, `background`, `location`, `restaurantWebsite`, `restaurantPhoneNumber`, `restaurantRating`, `image1`, `image2`, `image3`, `awards`, `websiteQR`, `openingHours`) VALUES (1, 2, 'Slappy Cakes', 'Pancakes', 'Slappy Cakes was founded in Portland, Oregon in 2009 by Ashley Berry; offering fun dining concept where diners can customize their own pancakes with built-in griddles at each table.', 'https://www.google.com.my/maps/place/Slappy+Cakes+Plaza+Singapura/@1.3008473,103.8428358,17z/data=!4m12!1m6!3m5!1s0x31da10a1f6ffa725:0x50d6093304c76074!2sSlappy+Cakes+Plaza+Singapura!8m2!3d1.3008419!4d103.8450299!3m4!1s0x31da10a1f6ffa725:0x50d6093304c76074!8m2!3d1.3008419!4d103.8450299', 'https://www.slappycakes.com.sg/', 67950779, '', 'C:\Users\Shaun\OneDrive\Documents\TP Stuff\CDEV\Foodie Review\Images\Slappy cake img1.jifif', '', '', 'file:///C:/Users/Shaun/OneDrive/Documents/TP%20Stuff/CDEV/Foodie%20Review/Images/Slappy%20cakes%20award.webp', '', '10AM-3PM, 5.30PM-9.30PM');
