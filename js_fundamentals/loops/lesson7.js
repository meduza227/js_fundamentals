//Loops

var numbers = [1, 2, 3, 4, 5]

//for I loop
for (var i = 0; i<numbers.length; i++)
{
console.log(numbers[i])
}

// for OF loop
for (num of numbers)
{
console.log(num)
}

// for OF loop
for (num of numbers)
{
    console.log(num)
    if(num == 4)
    {
        break
    }

}

// forEach
numbers.forEach( num => {
    console.log(num)
})