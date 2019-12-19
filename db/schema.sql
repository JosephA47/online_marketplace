DROP DATABASE IF EXISTS store;

CREATE DATABASE store;

USE store;

CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  item varchar(255) NOT NULL,
  seller varchar(255) NOT NULL,
  price INT,
  inCart BOOLEAN DEFAULT false NOT NULL,
  PRIMARY KEY (id)
);