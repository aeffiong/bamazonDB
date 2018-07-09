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
                message: "How many do you want to buy?",
                validate: function(value) {
                    if(isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function(answer) {
            // check database to see if there is enough product to sell
            var chosenProduct;
            for(var i = 0; i < results.length; i++) {
                chosenProduct = results[i];
                console.log(chosenProduct);
            }

            // if store has enough product, full order and update quantity in database and show customer total cost
            // if(chosenProduct)

            // if not enough quantity, say "insufficient quantity" and prevent order from going through
        })
        }
    )
}