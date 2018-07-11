-- Schema for the bamazon database

DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INTEGER(4) NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    stock_quantity INTEGER(11),
    PRIMARY KEY (item_id)
);

SELECT * FROM products;