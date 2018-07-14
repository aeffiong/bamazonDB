
// requiring mysql and inquirer npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// mysql password details
var password = require("./config");

// connecting to bamazon database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: password.password,
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connection successful!");
    console.log("Welcome to bamazon! Select an item by [Item ID] that you would like to purchase.");
    displayStore();
});

function displayStore() {
    // query database for products
    connection.query(
        "SELECT * FROM products",
        function (err, results) {
            for (var i = 0; i < results.length; i++) {
                console.log("---------------------------------------------------------------------------------------------\nItem ID: "
                    + results[i].item_id + " | " + "Product: " + results[i].product_name
                    + " | " + "Department: " + results[i].department_name + " | " + "Price: $" + results[i].price.toFixed(2) +
                    " | " + "Quantity: " + results[i].stock_quantity);
            }
            inquirer
                .prompt([{
                    name: "id",
                    type: "input",
                    message: "Enter the item id for the product you want to purchase.",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                },
                {
                    name: "amount",
                    type: "input",
                    message: "How many do you want to buy?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }
                ]).then(function (answer) {
                    connection.query(
                        "SELECT * FROM products WHERE ? ",
                        { item_id: answer.id },
                        function (err, res) {
                            if (err) throw err;
                            for (var i = 0; i < res.length; i++) {

                            }

                            if (answer.amount <= res[0].stock_quantity) {
                                console.log("Success! Your item is in stock and your order is being placed!");
                                console.log("Your total is: $" + parseInt(answer.amount) * res[0].price.toFixed(2));
                                connection.query(
                                    "UPDATE products SET ? WHERE ? ", [{
                                        stock_quantity: parseInt(res[0].stock_quantity) - parseInt(answer.amount)
                                    },
                                    {
                                        item_id: parseInt(answer.id)
                                    }],
                                    function (err, res) {
                                        if (err) throw err;
                                        console.log("Your order has been completed! Thanks!");
                                        connection.end();

                                    }

                                )

                            } else {
                                console.log("Insuffient stock, please try again");
                                displayStore();
                            }

                        }
                    )

                }
                )

        });
}




