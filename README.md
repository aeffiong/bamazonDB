## Bamazon

Bamazon is a CLI where the user can shop for certain items from a MySQL database. Bamazon shows how to pull data from a database and update it based on user input. 

The interface shows the user a list of items, their id, description, and price. The user then selects an item to purchase by the item id. After the user selects an item, he/she is asked how many to purchase. 

If there is enough in stock, the purchase will go through, the user will be told their total cost, and the database will update the amount of product in stock. 

If there is not enough of the item in stock, the user will be notified that there is not enough product. The purchase will not go through, and the user will be able to continue shopping. 

![bamazon](https://github.com/aeffiong/bamazonDB/blob/master/bamazon.gif)

### Technologies Used:

* Node
* MySQL
* JavaScript
* mysql npm package
* inquirer npm package

### Built with: 

* MySQL Workbench
* Visual Studio Code