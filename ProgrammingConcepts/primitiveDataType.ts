//Difference between var vs let vs const in TypeScript
//In TypeScript, as in JavaScript, there are three ways to declare variables: var, let, and const. 
// Each has its own characteristics and use cases:

//1. var: The var keyword is function-scoped, meaning that a variable declared with var is accessible throughout the entire function 
// in which it is declared. It can be re-declared and updated within its scope. However, using var can lead to issues like 
// variable hoisting and unintended overwriting of variables, which is why it is generally recommended to avoid using var in 
// modern TypeScript code.

//2. let: The let keyword is block-scoped, meaning that a variable declared with let is only accessible within the block 
// (e.g., a loop or an if statement) in which it is declared. It can be updated but not re-declared within its scope. 
// Using let helps prevent issues related to variable hoisting and provides better control over variable scope, making it 
// a preferred choice for variable declarations in TypeScript.

//3. const: The const keyword is also block-scoped, like let, but it is used to declare variables that are meant to be constant and 
// cannot be reassigned after their initial assignment. However, it's important to note that while 
// the variable itself cannot be reassigned, if the variable holds an object or an array, the contents of that object or array 
// can still be modified. Using const is recommended for values that should remain constant throughout the program, 
// as it helps prevent accidental reassignment and improves code clarity.

//In summary, the main differences between var, let, and const in TypeScript are their scoping rules and whether 
// they can be reassigned or re-declared. In modern TypeScript development, it is generally recommended to use let and const for variable 
// declarations, with const being preferred for values that should not change.

var x = 10; // function-scoped variable
x = 23; // re-declaration is allowed

console.log(x); // Output: "Hello"