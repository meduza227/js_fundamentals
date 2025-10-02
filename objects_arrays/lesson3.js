//objects

var customer = {
    firstName: "John",
    lastName: "Doe",
    car : ["Toyota", "Honda", "Ford"]
}
console.log(customer)
console.log("--------------------")
console.log(customer.firstName)
console.log(customer.lastName)
console.log("--------------------")

customer.firstName = "Jane"
customer.lastName = "Smith"

console.log(customer['firstName'])   
console.log(customer['lastName'])
console.log("--------------------")

customer['firstName'] = "Alice"
customer['lastName'] = "Johnson"

console.log(`${customer.firstName} ${customer.lastName}`)  //interpolation
console.log("--------------------")

//arrays
var cars = ["Toyota", "Honda", "Ford"]
console.log(cars[0])

cars[1] = "BMW"
console.log(cars[1])

console.log(customer.car[2])