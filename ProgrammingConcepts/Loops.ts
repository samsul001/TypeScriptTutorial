//Looping Statements
//----------------
//Looping in programming is nothing but executing a block of code repeatedly based on a condition.
//In TypeScript, we can use for, while, and do-while loops to create looping logic.
//while loop & do-while loop requires initialization, condition & increment/decrement in different steps 
//for loop requires all above condition in one single line
//if we dont know the number of iteration, we can go ahead with while/do-while loop. If we know the number of iteration, 
// we can use for loop.

//break
//if we want to intentionally exit from the loop, we can use break

//continue
//If we want to skip and jump to the next iteration from the loop, we can use continue. In this, loop will not be exited once condition is met, 
// it will simply skip and jump to next iteration
//-------------------------------------------------------------------------------------------------------------------------------------------s
//While Loop
//----------------
//The while loop is used to execute a block of code repeatedly as long as a specified condition is true.
//The condition is evaluated before each iteration, and if it evaluates to false, the loop will terminate.
/*
Syntax of while loop in TypeScript:

while(condition){
    statements;
    increment/decrement;
}
*/

//print numbers from 1 to 10 using a while loop
let count:number = 1;

while(count <= 10){
    console.log(count)
    count++;
}

console.log("--------------")

//print even numbers from 1 to 20 using a while loop
let count1:number = 10;

while(count1 >= 1){
    console.log(count1);
    count1--;
}

console.log("--------------")

//print 25 to 35

let count3: number = 25;

while(count3 <=30){
	console.log(count3);
	count3++;
}

console.log("--------------")

//print from 56 to 42

let count4: number = 56;

while(count4 >= 42){
	console.log(count4);
	count4--;
}

console.log("--------------Even numbers from 1 to 10 using while loop-------------------")

let even: number = 1;

while(even <=15){
    if(even%2 === 0){
        console.log(even)
    }
    even++;
}

console.log("--------------Odd numbers from 1 to 10 using while loop-------------------")

let odd: number = 1;

while(odd <=15){
    if(odd%2 != 0){
        console.log(odd)
    }
    odd++;
}

//Sum of Digits of a number using while loop
let num68:number = 861;
let sum1:number = 0;

while(num68 > 0){
    sum1 = sum1+num68 % 10;
    num68 = Math.floor(num68 / 10)
}

console.log(`sum of digits num68 ${sum1}`)


//Do-While Loop
//----------------
//The do-while loop is atleast executed the code once before checking the condition.

/*
Syntax of do-while loop in TypeScript:
do{
statements;
}(condition);
*/

let num8: number = 3;

do{
    console.log(num8);
    num8++;
}while(num8 < 4);

console.log("--------------Odd numbers from 1 to 10 using do-while loop-------------------")
let num:number = 0;

do{
    if(num%2 ===0){
        console.log(num)
    }
    num++;

}while(num <= 10)

console.log("--------------Even numbers from 1 to 10 using do-while loop-------------------")
let num1:number = 0;

do{
    if(num1%2 != 0){
        console.log(num1);
    }
    num1++;
}while(num1 <= 15);

console.log("--------------Even numbers from 1 to 10 using do-while loop-------------------")

//For Loop
//----------------
console.log("--------------numbers from 1 to 10 using for loop-------------------")
for(let i=1; i<=10; i++){
    console.log(i);
}
console.log("--------------Odd numbers from 1 to 10 using for loop-------------------")
for(let i=0; i<=15; i++){
    if((i%2!=0) && (i!=0)){
        console.log(i)
    }
}
console.log("--------------Even numbers from 1 to 10 using for loop-------------------")
for(let i=0; i<=15; i++){
    if((i%2 == 0) && (i!=0)){
        console.log(i)
    }
}

//break statement
//----------------
console.log("--------------break statement-------------------") 
for(let i=333; i<456; i++){
    if(i > 340){
        break;
    }
    console.log(i)
}

//Continue statement
//----------------
console.log("--------------continue statement-------------------")
for(let i=49; i<=300; i++){
    let digit:number = i;
    let sum = 0;
    while(digit > 0){
        sum = sum + digit % 10;
        digit = Math.floor(digit / 10);
    }
    if(sum !=19){
        continue;
    }
    console.log(i)
}

export {};