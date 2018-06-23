DROP DATABASE IF EXISTS yelp;

CREATE DATABASE yelp;

DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255),
  phone_number VARCHAR(255),
  url VARCHAR(255),
  google_map TEXT,
  categories VARCHAR(255)
);