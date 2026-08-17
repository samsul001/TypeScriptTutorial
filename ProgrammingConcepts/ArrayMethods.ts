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

//4. shift() - remove and return the starting element from an array
console.log(`Before shift(): ${fruits}`)
const removedFruit2 = fruits.shift();
console.log(`Removed element from the starting of an array: ${removedFruit2}`)
console.log(`After shift(): ${fruits}`)

//5. concat() - Combines tw or more arrays

//const concatArray:any[] = fruits.concat(['yellow',23]); //we cannot concat two different array types

let combinedArray = numbers.concat([4,2],[3,9]);
console.log(combinedArray)

//6. slice() - Extracts a section of an array, It returns a substring of a string / returns a separate array
// Starting index from 0
// Ending index will be excluded. Ex: If 3 is ending Index , It will consider 2 (3-1)
// Syntax : array.slice(start,end)

let extractedArray = fruits.slice(1,3);
console.log(`Actual Array values : ${fruits}`)
console.log(`Sliced array values : ${extractedArray}`)

//7. Splice() - Adds/Remove elements from anywhere from an Array and returning it..
// Syntax: splice(start, deleteCount, item1......itemN)
let meat:string[] = ['Beef','mutton','Chicken','Fish','Veal','Eggs','Prawns','Lobster','Crab','Shark']
console.log(`Before Splice: ${meat}`)

//Ex1: Removing 3 elements from index 6
let removedMeat = meat.splice(6,3) //starting from index 6,3 elements will be deleted
console.log(`removed element using splice: ${removedMeat}`);
console.log(`after splice(): ${meat}`)

//Ex2: Adding elements from Index 3 without deletion of any existing elements in the array
console.log(`Before splice for adding element without deletion: ${meat}`)
meat.splice(3,0,'Octobus','Mushroom')
console.log(`After splice() for adding elements without deletion: ${meat}`)

//Ex3: removed and added new values to an array
console.log(`Before splice for adding element with deletion: ${meat}`)
meat.splice(3,3,'Beef','Onion')
console.log(`After splice() for adding elements with deletion: ${meat}`)

//8. indexOf() - FInds the index of an element, if element is not found, it returns -1

let meatIndex = meat.indexOf('Veal');
console.log(`Index position of Veal is: ${meatIndex}`) //index = 5

let vegIndex = meat.indexOf('Chilli');
console.log(`index position of veg is: ${vegIndex}`) // return -1 as index

let meatIndex2 = meat.indexOf('Beef',1); //It will search the pattern of other elements named beed from index position `
console.log(meatIndex2)

//9. includes - checks if element exists
// It will return boolean result

const isLampPresent = meat.includes('lamb'); //false
const isMuttonPresent = meat.includes('mutton');

console.log(isLampPresent, isMuttonPresent) //false , true

//10. Converts Array to String

let numbers1:number[] = [3,5,6,7,8];

let arrayStr1:string = numbers1.toString()

console.log(arrayStr1)

let charactersArr:string[] = ['w','e','l','c','o','m','e']

let charStr:string =charactersArr.toString();

console.log(charStr)

export{}