//Arrays
//Arrays store multiple value to single variable that can be possible for primitive data types.
//Typescript Arrays can hold homogeneous data and as well as Hetrogeneous data
//Arrays are declared using "[]" and generic "Array<T>" type
//Indexing start from 0, Indexs are nothing but address of an elemment / position of an element in the array
//Arrays are an ordered collection of elements that means same order it will retrieved

//Approach 1 -Using literal:
//----------------------------
//Array Declaration
let names:string[] = [];

//Initialization and assigning value

names[0] = "Samsul";
names[1] = "Alam";
names[3] = "Masood";

console.log(names)

//Array Declaration + Initialization
let furuits:string[] = ['banana','apple','Pomogranate']

console.log(furuits)

//Approach 2: Using Generic type
//-------------------------------

let colors: Array<string> = ['yellow','red','black']; //Stores only string
let age: Array<number> = [45,685,3894,322]; //stores only numbers
let data: Array<string | number > = [453,'Samsul',22,13.34,'Alam'] //stores either string or number
let data1: Array<any> = [true,34,'door']

//Get value based on index
console.log(age[0])
console.log(data1[2])

//Traditional For loop
//-----------------------------------------------

for(let i=0; i<colors.length; i++){
    console.log(colors[i])
}

//"for in loop" and "for of loop"
//-------------------------------
console.log(`for in loop....`) //for in loop iterating the index position

for(let val in data){
    console.log(val);
    console.log(data[val])
}

console.log(`for of loop....`) //for of loop iterating the array values directly

for(let val of colors){
    console.log(val)
}

//Example 4: Passing an array to a function
//-------------------------------------------

//Search an element in an array using function

function findElement(ele: number, arrayNum: number[]):boolean{
    for(let val of arrayNum){
        if(val === ele){
            return true;
        }
    }
    return false;
}

let numbers1: number[] = [10,20,30,40,50]
console.log(findElement(10, numbers1)) //true
console.log(findElement(100, numbers1)) //false

//Example 5: Capitalize words and saved to a new array
//----------------------------------------------------

function captitalizeArray(arrayDef:string[]):string[]{
    let res:string[] = [];
    for(let i in arrayDef){
        res[i] = arrayDef[i].toUpperCase();
    }
    return res;
}

let newArray:string[] = captitalizeArray(colors)
console.log(captitalizeArray(newArray)) //returned new array


export{}