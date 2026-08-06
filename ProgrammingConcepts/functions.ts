//Named Function: A function that is declared with a name.
//----------------------------------------------------------
//Example 1: Named function with no parameters and no return value
function sum(x:number, y:number):void{
    console.log(`Sum value is ${x+y}`)
}

sum(273,483);

//Example 2: Named function with parameters and return value
function div(x:number, y:number):number {
    let division = x-y;
    return division;
}

const diVal = div(68,23)
console.log(`Division value is ${diVal}`)

//Example 3: Named function with rest parameters and return value
//Rest parameters does not restrict the number of arguments passed to a function. 
// It allows us to pass any number of arguments to a function.
function multiply(...num:number[]){
    let multiply =1;
    for(let i=0; i<num.length; i++){
        multiply = multiply*num[i];
    }
    console.log(multiply)
}
multiply(2,4,90,10)
let ghd = [4,5,6,7,8]
multiply(...ghd)

function sumOfNumbers(...num:number[]):void{
    let sum = 0;
    for(let i=0;i<num.length;i++){
        sum += num[i];
    }
    console.log(sum)
}
sumOfNumbers(2,3,4,5,6,7,8,9);
sumOfNumbers(2,3,4,5,6,7,8,9,10,11,12);
sumOfNumbers(...ghd);

//Example4: Named function with Rest Parameters - Multiple type

function sumOfElements(...elements: (string | number)[]):number {
    let sum = 0;
    let str = '';
    for(let i=0; i<elements.length; i++){
        const element = elements[i];

        if(typeof element == "number"){
            sum += element;
        }else{
            str = str +" "+element;
            str = str.trim();
        }
    }
    console.log(str);
    return sum;
}
console.log(sumOfElements(334,5,6,'hello',7,8,'world',9))
console.log(sumOfElements(233,3,4,'Java',5,6,7,"DotNet",8,9,10,11,12))
console.log(sumOfElements(...ghd))

//Example5: Named function with Optional Parameters
function subtraction(x:number,y:number,z?:number):number{
    return x-y-(z || 0);
}

const subtractionValue1 = subtraction(10,5);
console.log(`Subtraction value is ${subtractionValue1}`)   
const subtractionValue2 = subtraction(10,5,12);
console.log(`Subtraction value is ${subtractionValue2}`)

//Example6: Named function with Default Parameters
function discountCaluclation(price: number, discount:number = 10): number{
    let discountValue = price * (discount/100)
    let discountedPrice = price - discountValue;
    return discountedPrice;
}

const discount1 = discountCaluclation(300);
const discount3 = discountCaluclation(444,50);
const discount2 = discountCaluclation(2089);

console.log(`discount price of product1 ${discount1}`)
console.log(`discount price of product1 ${discount2}`)
console.log(`discount price of product1 ${discount3}`)

//===================================================================================================================================

//Anonymous Function: A function that is declared without a name.
//----------------------------------------------------------
//Anonymous function is a function that does not have a name, instead it is assigned to a variable, which acts as its name. 
// It can be used as a callback function or passed as an argument to another function.

//Example 1: Anonymous function with no parameters and no return value
const message = function():string{
    return "Hello World"
}
const msg = message();
console.log(`Anonymous function message is ${msg}`)

//Example 2: Anonymous function with parameters and return value
const mult = function(x:number, y:number):number {
    return x*y;
}
console.log(`Anonymous function multiplication is ${mult(5, 3)}`)

//Example 3: Anonymous function with optional parameters

const motilalAcc = function(x:number, y?:number):number{
    const multiVal = x * (y || 1);
    return multiVal;
}
const motilalAccValue1 = motilalAcc(5);
console.log(`Anonymous function multiplication1 is ${motilalAccValue1}`)
const motilalAccValue2 = motilalAcc(5, 3);
console.log(`Anonymous function multiplication2 is ${motilalAccValue2}`)

//Example 4: Anonymous function with default parameters
const bandhanRate = function(price:number, xirr:number = 9){
    const xirrAmount = price * (xirr/100);
    const totalReturns = price + xirrAmount;
    return totalReturns;
}
console.log(`Anonymous function total returns1 with default XIRR is ${bandhanRate(1000)}`)
console.log(`Anonymous function total returns2 with specified XIRR is ${bandhanRate(1000, 12)}`)

//Example 5: Anonymous function with multiple types and rest parameters
const niftyVal = function(...num: (number | string)[]):number{
    let sum = 0;
    let strMsg = "";
    for(let i=0;i <num.length; i++){
        if(typeof num[i] === "number"){
            sum = sum+ (num[i] as number);
        }else{
            strMsg = strMsg+" "+num[i];
        }
    }
    console.log(strMsg);
    return sum;
}

const fgjr = ["Hello", 2, 3, 4, "World", 5, 6, 7, "TypeScript", 8, 9, 10];
const fdss = niftyVal(...fgjr);
console.log(`Anonymous function sum of numbers is ${fdss}`)

//===================================================================================================================================

//Arrow Function: A function that is declared using the arrow syntax (=>).
//----------------------------------------------------------
//Arrow function is also known as anonymous function and we neever use the function keyword to declare an arrow function. 
// It is a more concise way to write functions in TypeScript.
//Arrow functions are also called as lamda functions.
//If we have only single statement in the body of the function, we can omit the curly braces and return keyword.
// The value of the single statement will be returned automatically.
//If first parameter is optional, we need to specify the rest parameters as optional as well.

//There are 3 parts to a Lamda function -
//1. parameters - A function may optionally have parameters.
//2. The fat arrow notation (=>) - It is also called as goes to operator.
//3. Statements - Represents the body of the function. It can be a single expression or a block of code enclosed in curly braces.


//Example 1: Arrow function with no parameters and no return value
let dlls = ():void =>{
    console.log(`Arrow Function - Lamda - Hello World`)
}
dlls();

//Example 2: Arrow function with implicit return value
let add = (x:number, y:number) => x + y; //Arrow function without curly braces and return keyword. 
//The value of the single statement will be returned automatically.
console.log(`Arrow function sum is ${add(34, 15)}`);

//Example 3: Arrow function with parameters and return value
let sub = (x:number, y:number):number => {
    let subValue = x-y;
    return subValue;
}
console.log(`Arrow function difference is ${sub(34, 15)}`);

//Example 4: Arrow function with optional parameters
const motilalAcc1 = function(x:number, y?:number):number{
    const multiVal = x * (y || 1);
    return multiVal;
}
const motilalAccValue3 = motilalAcc(5);
console.log(`Arrow function multiplication1 is ${motilalAccValue3}`)
const motilalAccValue4 = motilalAcc(5, 3);
console.log(`Arrow function multiplication2 is ${motilalAccValue4}`)


//Example 5: Arrow function with default parameters
let fjgkgpp = (price:number, rate:number = 40):number =>{
    let discountPrice = price * (rate/100);
    let priceAfterDiscount = price - discountPrice
    return priceAfterDiscount;
}
console.log(`Arrow function with default parameters is ${fjgkgpp(100, 30)}`);
console.log(`Arrow function with default parameters is ${fjgkgpp(100)}`);

//Example 6: Arrow function with multiple types and rest parameters

let hdjssa = (...nums: (string| number)[]):number => nums.length;

const lengthOfElements = hdjssa(1, 2, 3, "Hello", 4, 5, "World", 6, 7, 8, "TypeScript", 9, 10);
console.log(`Arrow function with multiple types and rest parameters is ${lengthOfElements}`);


//===========================================================================================================================


//Function Declaration: A function that is declared using the function keyword.
//Function Expression: A function that is assigned to a variable.