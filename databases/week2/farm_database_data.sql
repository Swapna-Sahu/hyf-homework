
-- Creating Farm Database using farmers,animals,barn and product relationship

USE farmhouse;
SET NAMES utf8mb4;

CREATE TABLE `farmers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `product_type` varchar(255) NOT NULL,
  `quantity` INT(45) NOT NULL ,
  `price` DECIMAL(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Many barns can give same products
CREATE TABLE `barns` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `barn_type` varchar(255) NOT NULL,
  `capacity` int(10) unsigned NOT NULL,
  `status` varchar(255) NOT NULL,
  `products_id` int(10) unsigned NOT NULL,
   CONSTRAINT `fk_barn_products` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- many animals can stay one barn, give one product, can be with one farmer

CREATE TABLE `animals` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `animal_type` varchar(255) NOT NULL,
  `DOB` DATETIME NOT NULL,
  `barns_id` int(10) unsigned NOT NULL,
  `products_id` int(10) unsigned NOT NULL,
  `farmers_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_barn_animals` FOREIGN KEY (`barns_id`) REFERENCES `barns` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_animals_farmers` FOREIGN KEY (`farmers_id`) REFERENCES `farmers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_animals_products` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- farmer can have many products and product can be from many farmers
CREATE TABLE `farmers_products_relations` (
  `farmers_id` int(10) unsigned NOT NULL,
  `products_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`farmers_id`, `products_id`),
  CONSTRAINT `fk_farmer_with_products` FOREIGN KEY (`farmers_id`) REFERENCES `farmers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_product_many_farmers` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserting Data to the Entity

-- farmers
insert into farmers (id, name, email, phone) values (1, 'Aarika Ellingworth', 'aellingworth0@harvard.edu', '483-396-8795');
insert into farmers (id, name, email, phone) values (2, 'Pren Goldsworthy', 'pgoldsworthy1@spotify.com', '635-572-8467');
insert into farmers (id, name, email, phone) values (3, 'Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683');
insert into farmers (id, name, email, phone) values (4, 'Rodie Duncan', 'rduncan3@quantcast.com', '646-743-6191');
insert into farmers (id, name, email, phone) values (5, 'Aubry Polak', 'apolak4@indiatimes.com', '302-678-7931');
insert into farmers (id, name, email, phone) values (6, 'Maryrose Meadows', 'mmeadows5@comcast.net', '251-524-6594');
insert into farmers (id, name, email, phone) values (7, 'Pavel Brushneen', 'pbrushneen6@techcrunch.com', '316-170-3640');
insert into farmers (id, name, email, phone) values (8, 'Hedy Gerault', 'hgerault7@nymag.com', '176-177-5579');
insert into farmers (id, name, email, phone) values (9, '王秀英', 'wang.xiuying@weebly.com', '891-952-6749');
insert into farmers (id, name, email, phone) values (10, 'إلياس', 'elias@github.com', '202-517-6983');
insert into farmers (id, name, email, phone) values (11, 'Donald Duck', 'donald@duck.com', '202-517-6984');

-- Products
insert into products (id, product_type, quantity, price) values (1, 'Milk',10 , 10.00);
insert into products (id, product_type, quantity, price) values (2, 'Egg',10 , 20.00);
insert into products (id, product_type, quantity, price) values (3, 'Pork',10, 50.00);
insert into products (id, product_type, quantity, price) values (4, 'Wool',10, 10.00);

-- Barns
insert into barns (id, barn_type, products_id, status, capacity) values (1,'Cattle shed',1,'available',10);
insert into barns (id, barn_type, products_id, status, capacity) values (2,'Pen',2,'available',10);
insert into barns (id, barn_type, products_id, status, capacity) values (3,'Coop',4,'available',10);
insert into barns (id, barn_type, products_id, status, capacity) values (4,'Sty',3,'available',10);
insert into barns (id, barn_type, products_id, status, capacity¨) values (5,'Sty',3,'available',10);
insert into barns (id, barn_type, products_id, status, capacity) values (6,'Cattle shed',1,'available',10);
insert into barns (id, barn_type, products_id, status, capacity) values (7,'Pen',2,'available',10);
insert into barns (id, barn_type, products_id, status, capacity) values (8,'Coop',1,'available',10);

-- animals
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (1, 'Cow', '2005-11-05 14:29:36', 1,1,1);
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (2, 'Hen', '2015-11-05 14:29:36',2, 2,2);
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (3, 'Pig', '2018-11-05 14:29:36', 3,4,3);
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (4, 'Pig', '2017-11-05 14:29:36', 3,5,1);
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (5, 'Sheep', '2015-11-05 14:29:36',4,3,2);
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (6, 'Cow', '2005-10-05 14:29:36',1,1,3);
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (7, 'Sheep', '2016-11-05 14:29:36',4,8,4);
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (8, 'Cow', '2015-01-05 14:29:36',1,6,4);
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (9, 'Hen', '2015-01-05 14:29:36', 7,2,5);
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (10, 'Cow', '2011-05-05 14:29:36', 1,6,6);
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (11, 'Pig', '2015-11-05 14:29:36', 3,4,7);
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (12, 'Cow', '2010-11-05 14:29:36',1,6,8);
insert into animals (id, animal_type, DOB, products_id,barns_id,farmers_id) values (13, 'Cow', '2008-11-05 14:29:36',1,1,9);
-- error in 4,9,11 Error code 1452
-- farmers_products_relations
insert into farmers_products_relations (farmers_id,products_id) values (1,2);
insert into farmers_products_relations (farmers_id,products_id) values (1,3);
insert into farmers_products_relations (farmers_id,products_id) values (2,4);
insert into farmers_products_relations (farmers_id,products_id) values (3,4);