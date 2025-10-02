//Declarative functions
helloOne()
function helloOne(){
    console.log('Hello one!')
}
helloOne()

//Anonymus functions
var helloTwo = function(){
    console.log('Hello Two!')
}

helloTwo()

//ES6 function syntax or arrow functions
var helloThree = () => {
    console.log('Hello Three!!!')
}
helloThree()

//functions with arguments
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}

printName('Xenia', 'Smith')

//function with return
function multiplyByTwo(num){
    var result = num *2
    return result
}

var myResult = multiplyByTwo(88)
console.log(myResult)

// import functions
import {printAge} from '../helpers/printHelper.js'
printAge(5)

// import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(15)
