//Looping Statements
//----------------
//Looping in programming is nothing but executing a block of code repeatedly based on a condition.
//In TypeScript, we can use for, while, and do-while loops to create looping logic.

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


//For Loop
//----------------


export {};