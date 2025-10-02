// Logical "AND"
console.log(true && true) // all values have to be TRUE for expration to be TRUE

// Logical "OR"
console.log(true || false) // any value should be TRUE for expration to be TRUE

var ageIsMoreThanEighteen = true
var isUSCitizen = false

var eligibilityForDriverLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicense)


var eligibilityForDriverLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicense)

//Logical "NOT"

console.log(!true)

console.log(6 !== 10)