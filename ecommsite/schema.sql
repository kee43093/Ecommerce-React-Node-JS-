-- DROP DATABASE IF EXISTS ecommerce_info;
-- CREATE DATABASE IF NOT EXISTS ecommerce_info;
-- USE ecommerce_info;


-- DROP TABLE IF EXISTS Price_info,Product_info,Photos_info,Contact_info;



-- CREATE TABLE Price_info (
-- price_id      	INT AUTO_INCREMENT NOT NULL,
-- original_price  DEC(6,2),
-- sales_price 	DEC(6,2),
-- tax 			DEC(6,2) NOT NULL,
--  PRIMARY KEY 	(price_id)
-- );

-- INSERT INTO Price_info (original_price, sales_price, tax)
-- VALUES
-- ("59.99", "39.99", "0.7"),
-- ("49.99", "39.99", "0.7"),
-- ("35.99", "29.99", "0.7"),
-- ("49.99", "39.99", "0.7"),
-- ("39.99", "29.99", "0.7"),
-- ("45.99", "30.99", "0.7"),
-- ("59.99", "39.99", "0.7"),
-- ("49.99", "39.99", "0.7"),
-- ("35.99", "29.99", "0.7"),
-- ("59.99", "39.99", "0.7"),
-- ("49.99", "39.99", "0.7"),
-- ("35.99", "29.99", "0.7");


-- CREATE TABLE Photos_info (
-- Photos_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
-- price_id INT,
-- image_id VARCHAR(30),
-- hyperlink LONGTEXT,
-- FOREIGN KEY (price_id) REFERENCES Price_info (price_id)
-- );

-- INSERT INTO Photos_info (price_id, image_id, hyperlink)
-- VALUES
-- (1 ,"bg-img1", "https://www.pubg.com/"),
-- (2, "bg-img2", "https://assassinscreed.ubisoft.com/game/en-us/home"),
-- (3, "bg-img3", "https://www.callofduty.com/"),
-- (4, "bg-img4", "https://nba.2k.com/2k19/"),
-- (5, "bg-img5", "https://elderscrolls.bethesda.net/en/skyrim"),
-- (6, "bg-img6", "https://www.ea.com/games/madden-nfl/madden-nfl-20/news"),
-- (7, "bg-img7", "https://www.ea.com/games/apex-legends"),
-- (8, "bg-img8", "https://worldofwarcraft.com/en-us/"),
-- (9, "bg-img9", "https://rainbow6.ubisoft.com/siege/en-us/home/index.aspx"),
-- (10, "bg-img10", "https://www.rockstargames.com/grandtheftauto/"),
-- (11, "bg-img11", "https://darkageofcamelot.com/"),
-- (12, "bg-img12", "https://blog.counter-strike.net/");



-- CREATE TABLE Product_info (
-- Product_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
-- price_id INT,
-- ProductType VARCHAR(30),
-- quantity INT,
-- ProductName VARCHAR(30),
-- FOREIGN KEY (price_id) REFERENCES Price_info (price_id)
-- );


-- INSERT INTO Product_info (price_id, productType, quantity, ProductName)
-- VALUES
-- (1, "Video/games", 10, "PUBG"),
-- (2, "Video/games", 10, "ASSAINS CREED"),
-- (3, "Video/games", 10, "CODGHOSTS"),
-- (4, "Video/games", 10, "2K20"),
-- (5, "Video/games", 10, "Skyrim"),
-- (6, "Video/games", 10, "Madden20"),
-- (7, "Video/games", 10, "APEX-LEGENDS"),
-- (8, "Video/games", 10, "WOW OF WARCRAFT"),
-- (9, "Video/games", 10 , "RAINBOW-SIXSEIGE"),
-- (10, "Video/games", 10 , "GRAND THEFT AUTO V"),
-- (11, "Video/games", 10 , "DAOC"),
-- (12, "Video/games", 10 , "Counter STRIKE");

-- SELECT Photos_info.image_id, Photos_info.hyperlink, Product_info.ProductName, Price_info.original_price
-- FROM Photos_info
-- INNER JOIN Product_info
-- ON Photos_info.price_id = Product_info.price_id
-- INNER JOIN Price_info 
-- ON Photos_info.price_id = Price_info.price_id