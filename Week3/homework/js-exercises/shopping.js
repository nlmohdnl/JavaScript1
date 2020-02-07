'use strict'

const groceryList = ['bananas', 'milk'];


function addToShoppingCart(item) {
    groceryList.push(item);
    if (groceryList.length > 3) {
        groceryList.shift();
    }
    return `You bought ${groceryList}!`;
}

console.log(addToShoppingCart("chicken"));
console.log(addToShoppingCart("oil"));
console.log(addToShoppingCart("rice")); 
console.log(addToShoppingCart("checolate")); 