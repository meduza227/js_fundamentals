//Concatenation and Interpolation
var price = 50
var itemName = "Cup"
var messageToPrint = "The price of " + itemName + " is $" + price + "."

// Using template literals (interpolation)
var anotherMessage = `The price of ${itemName} for you is ${price}`

console.log(messageToPrint)
console.log(anotherMessage)
