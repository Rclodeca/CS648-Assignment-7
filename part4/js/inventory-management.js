/*eslint-env browser*/

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all products");
    window.console.log("update - Change quantity");
    window.console.log("exit - Exit the program");
    window.console.log("");
}
function display(inventory) {
    "use strict";
    inventory.forEach(p => {
        window.console.log(`${p[0]} ${p[1]} (${p[2]}) $${p[3]}`);
    });
    window.console.log("");
}
function update(inventory) {
    "use strict";
    let productNumber = window.prompt("Enter the product's number");
    productNumber = parseInt(productNumber, 10);

    const index = inventory.findIndex(product => {
        if(product[0] === productNumber){
            return true;
        }
    });
    
    const quantity = window.prompt(`Enter the new quantity for ${inventory[index][1]}`);
    inventory[index][2] = quantity;

    window.console.log("");
}
function main() {
    "use strict";
    let command;
    
    display_menu();
    
    const inventory = [
        [1001, "cereal", 10, 3.99], 
        [4236, "cheese", 35, 2.99],
        [4536, "milk", 12, 2.99],
        [9362, "beef", 13, 6.49],
        [3546, "chicken", 4, 5.99]
    ];
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();