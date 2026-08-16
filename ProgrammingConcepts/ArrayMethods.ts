//Array Methods

let fruits: string[] = ['Apple','Orange','Grapes','Banana'];
let numbers: number[] = [34,93,12,55,76]

//length - attribute not a method

console.log(`length of fruits array : ${fruits.length}`)
console.log(`length of numbers array: ${numbers.length}`)

//1. push() - Adds single element / Multiple elements at the end of an array
//Syntax: array.push(element1,element2,...,elementn)
console.log(`before push(): ${numbers}`)
numbers.push(5,9);
console.log(`After push(): ${numbers}`)

//2. pop() - removes and return the last element from an array
console.log(`before pop(): ${fruits}`)
let removedFruit = fruits.pop();
console.log(`Removed element from the fruits array: ${removedFruit}`)
console.log(`After pop(): ${fruits}`)

//3, unshift() - adds single/multiple elements at the starting of an array
console.log(`Before unshift(): ${fruits}`)
fruits.unshift('Kiwi','Mango')
console.log(`After unshift(): ${fruits}`)