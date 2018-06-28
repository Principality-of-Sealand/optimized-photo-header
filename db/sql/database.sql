DROP DATABASE IF EXISTS yelp;

CREATE DATABASE yelp;

\c yelp;

DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255),
  phone_number VARCHAR(255),
  url VARCHAR(255),
  google_map VARCHAR(255),
  categories VARCHAR(255)
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  profile_pic VARCHAR(255)
);

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
  ID SERIAL PRIMARY KEY,
  url VARCHAR(255) NOT NULL,
  date_posted VARCHAR(255)
);

DROP TABLE IF EXISTS rest_photos;

CREATE TABLE rest_photos (
  ID SERIAL PRIMARY KEY,
  rest_id INT REFERENCES restaurants(ID),
  photo_id INT REFERENCES photos(ID)
);

DROP TABLE IF EXISTS user_photos;

CREATE TABLE user_photos (
  ID SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(ID),
  photo_id INT REFERENCES photos(ID)
);
