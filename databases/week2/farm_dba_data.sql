USE farm_dba;
SET NAMES utf8mb4;
CREATE TABLE `farmers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL UNIQUE,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `animals` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `animal_type` varchar(255) NOT NULL,
  `age` int(10) unsigned NOT NULL,
  `product` varchar(255) NOT NULL,
  `products_id` int(10) unsigned NOT NULL,
  `farmers_id`int(10) unsigned NOT NULL,
  INDEX `fk_Animals_Products1_idx` (`Products_id` ASC) VISIBLE,
  INDEX `fk_Animals_Farmer1_idx` (`farmers_id` ASC) VISIBLE,
  CONSTRAINT `fk_animals_products` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_animals_farmerss` FOREIGN KEY (`farmers_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `product_type` varchar(255) NOT NULL,
  `quantity` varchar(255) NOT NULL ,
  `price` varchar(255) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `barns` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `barn_type` varchar(255) NOT NULL,
  `current_animals` int(10) unsigned,
  `capacity` int(10) unsigned NOT NULL,
  `status` varchar(255) NOT NULL,
  `animals_id` int(10) unsigned NOT NULL,
  `products_id` int(10) unsigned NOT NULL,
    INDEX `fk_Barn_Animals1_idx` (`Animals_id` ASC) VISIBLE,
  INDEX `fk_Barn_Products1_idx` (`Products_id` ASC) VISIBLE,
   CONSTRAINT `fk_barn_animals` FOREIGN KEY (`animals_id`) REFERENCES `animals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
   CONSTRAINT `fk_barn_products` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `farmers_products_relations` (
  `farmers_id` int(10) unsigned NOT NULL UNIQUE,
  `products_id` int(10) unsigned NOT NULL UNIQUE,
  PRIMARY KEY(`farmers_id`, `products_id`),
    INDEX `fk_Farmer_has_Products_Products1_idx` (`Products_id` ASC) VISIBLE,
  INDEX `fk_Farmer_has_Products_Farmer1_idx` (`farmers_id` ASC) VISIBLE,
  CONSTRAINT `fk_farmer_with_products` FOREIGN KEY (`farmers_id`) REFERENCES `farmers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_product_many_farmers` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
