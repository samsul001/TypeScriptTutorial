// ========= forEach(), map(), filter(), reduce(), some(), every() ==============

//Every method mentioned above will take a callback function as paramater /argument

//1. forEach()  - Executes a function once for each element array
// It takes function as parameter

//syntax:  array.forEach(currentElement, index, array)
//currentElement - The current eleemnt in the iteration
//index - index position of the current element in the iteration
//array - the array the current element belong to

let languages:string[] = ['SENTAMIZH', 'ARABIC', 'FRENCH', 'BENGALI', 'ENGLISH', 'MANDARIN', 'SPANISH']

languages.forEach((element, index,languages) => {
   console.log(index, element) 
   //console.log(languages)
});
console.log(`========================================================`)
// languages.forEach(function(element, index){
//     console.log(index, element)
// })

//Example: convert all elements in the array to lower case character

languages.forEach((element)=> {
    console.log(element.toLowerCase())
})

//map() - creates new array with the result of calling the function on every element of an array
//It takes function as parameter
//It transforms the each element of an array to another form
//Returns the same number of elements that we have in original array

//syntax: array.map(function(currentValue, index, array))

//Example: get square of all the numbers in an array.

let numbers:number[] = [1,3,4,5];

let squaredNumbers = numbers.map((element)=>element*element);

// let squarednumber = numbers.map((e)=> {
//     return e*e
// })

console.log(`squared numbers: ${squaredNumbers}`)

//Example: Double each number
let doubleNumbers = numbers.map((e)=> {
    return e+e;
})

//let doubledNumber = numbers.map((e) => e*2 )
console.log(`doubled number ${doubleNumbers}`)