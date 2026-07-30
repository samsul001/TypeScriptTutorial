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