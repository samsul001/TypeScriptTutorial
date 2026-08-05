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

//Named function with Rest Parameters - Multiple type

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

//Named function with Optional Parameters

//Anonymous Function: A function that is declared without a name.
//Arrow Function: A function that is declared using the arrow syntax (=>).
//Function Declaration: A function that is declared using the function keyword.
//Function Expression: A function that is assigned to a variable.
//