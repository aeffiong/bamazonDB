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
    console.log("Welcome to bamazon! Select an item by [item_id] that you would like to purchase.");
    startPurchase();
});

function startPurchase() {
    // query database for products
    connection.query(
        "SELECT item_id, product_name, department_name, price FROM products",
        function(err, results) {
            console.log(results);
            // user selects which item id they want to purchase
            inquirer
            .prompt([{
                name: "id",
                type: "input",
                message: "Enter the item id for the product you want to purchase."
            },
            {
                name: "amount",
                type: "input",
                message: "How many do you want to buy?"
            }
        ]);
        }
    )
}