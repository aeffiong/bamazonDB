// // requiring mysql and inquirer npm packages
// var mysql = require("mysql");
// var inquirer = require("inquirer");

// // mysql password details
// var password = require("./config");

// // connecting to bamazon database
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3307,
//     user: "root",
//     password: password.password,
//     database: "bamazon"
// });

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("connection successful!");
//     console.log("Welcome to bamazon! Select an item by [item_id] that you would like to purchase.");
//     displayStore();
// });

// function displayStore() {
//     // query database for products
//     connection.query(
//         "SELECT * FROM products",
//         function (err, results) {
//             for (var i = 0; i < results.length; i++) {
//                 console.log("---------------------------------------------------------------------------------------------\nItem ID: "
//                     + results[i].item_id + " | " + "Product: " + results[i].product_name
//                     + " | " + "Department: " + results[i].department_name + " | " + "Price: $" + results[i].price.toFixed(2) +
//                     " | " + "Quantity: " + results[i].stock_quantity);
//             }
//             startPurchase();


//         });

//     function startPurchase() {
//         // user selects which item id they want to purchase
//         inquirer
//             .prompt([{
//                 name: "id",
//                 type: "input",
//                 message: "Enter the item id for the product you want to purchase.",
//                 validate: function (value) {
//                     if (isNaN(value) === false) {
//                         return true;
//                     }
//                     return false;
//                 }
//             },
//             {
//                 name: "amount",
//                 type: "input",
//                 message: "How many do you want to buy?",
//                 validate: function (value) {
//                     if (isNaN(value) === false) {
//                         return true;
//                     }
//                     return false;
//                 }
//             }
//             ]).then(function (answer) {
//                 // if store has enough product, full order and update quantity in database and show customer total cost
//                 connection.query(
//                     "SELECT * FROM products WHERE ? ",
//                     { item_id: answer.id },
//                     function (err, res) {
//                         if (err) throw err;
//                         // console.log(res);
//                         // console.log(answer.id);
//                         // console.log(res[0].stock_quantity);
                        
//                         if (answer.amount <= res[0].stock_quantity) {
//                             console.log("Success! Your item is in stock and your order is being placed!");
//                             console.log("Your total is: $" + parseInt(answer.amount) * res[0].price.toFixed(2));
                           
//                         } else {
//                             console.log("Insuffient stock, please try again");
//                             displayStore();
//                         }
//                     }
//                 )
                            
//                 // update store quantity - this is where I'm stuck: new function?
//                 // connection.query(
//                 //     "UPDATE products SET stock_quantity WHERE ? ",
//                 //     {item_id: answer.id},
//                 //     function (error, result) {
//                 //         if (error) throw error;
//                 //         console.log(result);

//                 //     }
//                 // )
//                 // var chosenItem = [];
//                 // for(var i = 0; i < results.length; i++) {
//                 // console.log(chosenItem.push(results[i].stock_quantity))
//                 // console.log("Item ID: " + answer.id + " " + "Quantity to purchase: " + answer.amount);
//                 // }




//                 // if not enough quantity, say "insufficient quantity" and prevent order from going through
//             })
//     }

// }

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
                // if store has enough product, full order and update quantity in database and show customer total cost
                console.log(results);
                var chosenItem;
                for (var i = 0; i < results.length; i++) {
                    chosenItem = results[i];
                }
                        // i want to match the id with the product then compare amount ordered to what's in stock
                        if(answer.id === results[i].item_id)
                        // if (parseInt(answer.amount) <= parseInt(chosenItem.stock_quantity)) {
                        //     console.log(chosenItem);
                        //     console.log("Success! Your item is in stock and your order is being placed!");
                        //     console.log("Your total is: $" + parseInt(answer.amount) * chosenItem.price.toPrecision(5));
                        //     connection.query(
                        //         "UPDATE products SET ? WHERE ? ", [{
                        //             stock_quantity: parseInt(chosenItem.stock_quantity) - parseInt(answer.amount)
                        //         },
                        //         {
                        //             item_id: parseInt(answer.id)
                        //         }],
                        //         function(err, res) {
                        //             if(err) throw err;
                        //             console.log("Your order has been completed! Thanks!");
                        //             connection.end();
                        //         }
                        //     )
                           
                        // } else {
                        //     console.log("Insuffient stock, please try again");
                        //     displayStore();
                        // }
                    }
                )


        });

        // user selects which item id they want to purchase
        
                            
                // update store quantity - this is where I'm stuck: new function?
                // connection.query(
                //     "UPDATE products SET stock_quantity WHERE ? ",
                //     {item_id: answer.id},
                //     function (error, result) {
                //         if (error) throw error;
                //         console.log(result);

                //     }
                // )
                // var chosenItem = [];
                // for(var i = 0; i < results.length; i++) {
                // console.log(chosenItem.push(results[i].stock_quantity))
                // console.log("Item ID: " + answer.id + " " + "Quantity to purchase: " + answer.amount);
                // }




                // if not enough quantity, say "insufficient quantity" and prevent order from going through
        
    }




