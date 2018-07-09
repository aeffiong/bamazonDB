// requiring mysql and inquirer npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// mysql password details
var password = require("./config");

// connecting to bamazon database
var connection = mysql.createConnection ({
    host: "localhost",
    port: 3307,
    user: "root",
    password: password.password,
    database: "bamazon"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("connection successful!");
    console.log("Welcome to bamazon! Select an item and how many you would like to purchase.");
});