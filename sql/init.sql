CREATE TABLE categories ( id int primary key auto_increment, name varchar(100) not null, url varchar(255) not null );

CREATE TABLE badges ( id int primary key auto_increment, placement varchar(45) not null, code varchar(45) not null, type varchar(45) not null, icon varchar(255) not null, icon_width int default 255, icon_height int default 30, text_color varchar(45), background_color varchar(45), text varchar(45) );

CREATE TABLE brands ( id int primary key auto_increment, name varchar(255) not null );

CREATE TABLE users ( id int primary key auto_increment, name varchar(255) not null, email varchar(255) not null, password varchar(255), has_password boolean default false, is_email_verified boolean default true, birthday datetime, avatar_url varchar(255), gender boolean default true, created_date datetime default now(), phone char(12) , active boolean default true );

CREATE TABLE stores ( id int primary key auto_increment, name varchar(255) not null, sku int not null, logo varchar(255), is_best_store boolean default false, user_id int, foreign key (user_id) references users(id) );

CREATE TABLE products ( id int primary key auto_increment, name varchar(255) not null, sku int not null, url_key varchar(255) not null, price double not null, origin_price double not null, discount double default 0, discount_rate int default 0, short_description varchar(255), description text, thumbnail_url varchar(255), product_group_name varchar(255), meta_title varchar(255), specifications text, quantity_sold int, return_and_exchange_policy varchar(255), brand_id int , foreign key (brand_id) references brands(id), badge_id int, foreign key (badge_id) references badges(id), store_id int, foreign key (store_id) references stores(id) );

CREATE TABLE option_products( id int primary key auto_increment, name varchar(255) not null, sku int not null, price double not null, thumbnail_url varchar(255), option1 varchar(255), type varchar(255), product_id int, foreign key (product_id) references products(id), store_id int, foreign key (store_id) references stores(id) );

CREATE TABLE product_category( id int primary key auto_increment, product_id int, foreign key (product_id) references products(id), category_id int, foreign key (category_id) references categories(id) );

CREATE TABLE images( id int primary key auto_increment, base_url varchar(255) not null, is_gallery boolean default 1, label varchar(255), large_url varchar(255), medium_url varchar(255), small_url varchar(255), thumbnail_url varchar(255), position varchar(255), product_id int, foreign key (product_id) references products(id), option_product_id int, foreign key (option_product_id) references option_products(id) );