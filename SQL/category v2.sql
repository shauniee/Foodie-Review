/*CREATE TABLE IF NOT EXISTS `data_dictionary`.`Category` (
  `category_id` INT,
  `nearestToYou` VARCHAR(45) CHARACTER SET utf8,
  `healthy` VARCHAR(45) CHARACTER SET utf8,
  `popular` VARCHAR(45) CHARACTER SET utf8,
  `promotion` VARCHAR(45) CHARACTER SET utf8,
  `valueForMoney` VARCHAR(45) CHARACTER SET utf8
);*/
use data_dictionary;

CREATE TABLE IF NOT EXISTS `data_dictionary`.`Category` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `nearestToYou` VARCHAR(45) CHARACTER SET utf8,
  `healthy` VARCHAR(45) CHARACTER SET utf8,
  `popular` VARCHAR(45) CHARACTER SET utf8,
  `promotion` VARCHAR(45) CHARACTER SET utf8,
  `valueForMoney` VARCHAR(45) CHARACTER SET utf8,
  PRIMARY KEY (`category_id`),
  UNIQUE INDEX `category_id_UNIQUE` (`category_id` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


INSERT INTO Category (`category_id`, `nearestToYou`, `healthy`, `popular`, `promotion`, `valueForMoney`) VALUES (1, 'North', 'Healthy', 'Popular', 'Promotion', 'Value For Money');
INSERT INTO Category (`category_id`, `nearestToYou`, `healthy`, `popular`, `promotion`, `valueForMoney`) VALUES (2, 'South', 'Healthy', 'Popular', 'Promotion', 'Value For Money');
INSERT INTO Category (`category_id`, `nearestToYou`, `healthy`, `popular`, `promotion`, `valueForMoney`) VALUES (3, 'East', 'Healthy', 'Popular', 'Promotion', 'Value For Money');
INSERT INTO Category (`category_id`, `nearestToYou`, `healthy`, `popular`, `promotion`, `valueForMoney`) VALUES (4, 'West', 'Healthy', 'Popular', 'Promotion', 'Value For Money');
