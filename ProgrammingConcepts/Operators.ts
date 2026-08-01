//1. Arthematic Operators
//--------------------

// + : Addition
// - : Subtraction
// * : Multiplication
// / : Division
// % : Modulus
// ** : Exponentiation

console.log(5+3);
console.log(5-3);
console.log(5*3);
console.log(17/3);
console.log(5%3);
console.log(5**3);

//2. Assignment Operators
//--------------------
// = : Assignment
// += : Addition Assignment
// -= : Subtraction Assignment
// *= : Multiplication Assignment
// /= : Division Assignment
// %= : Modulus Assignment
// **= : Exponentiation Assignment

//The above operators are also called short hand operators 

let a = 10, b = 5;
a = a+b;
console.log(a);
a += b;
console.log(a);
a -= b;
console.log(a);
a /= b;
console.log(a)
a *= b;
console.log(a)
a %= b;
console.log(a)

//3. Relational Operators
//------------------------
//Relational operators always return boolean values
let z = 10, y=20;

console.log(z < y);
console.log(z > y);
console.log(z <= y);
console.log(z >= y);
console.log(z == y);
console.log(z != y);

//Difference between "== ("Equality")" , "===("strict equality")"
console.log('****** Difference between == ===******');
let num1:any = 10;
let num2: any = "10"

console.log(num1 == num2) //true (Only compare values)
console.log(num1 === num2) //false (compares the values and its data type)

//4. Logical Operators
//---------------------
//Return boolean results
//1. &&
//2. ||
//3. !

// b1       b2       &&        ||        |
//=============================================
// true    true     true    true        false
// true    false    false   true        false
// false   true     false   true        false
// false   false    false   false       true

console.log("Logical Operators")
console.log(true && true || false);
console.log(true && false || true);
console.log(false && true);
console.log(false && false);
console.log("--------------")
console.log(!true);
console.log(!false);
console.log("--------------")
console.log(!true && false || false);


//Combination of relational and logical operator
let num1 = 4, num2=7, num3=9;
console.log(num1 < num2 && num2 < num3)

//Increment and Decrement operators

//It used for incrementing and decrementing the number variables
//post Increment : while assigning a post incremental variable to another variable, incremented value will not be stored to the new variable. But the concerned incremented variable will show the incremented value.
//pre Increment: while assigning a pre incremental variable to another variable, incremented value will be assigned to new variable also.
//Post Decrement & Pre Decrement - Concept is same as above.

//Ternary operators
let s1:number = 45, s2:number = 56;
let bigValue = s1 > s2 ? s1:s2;
console.log(bigValue)
