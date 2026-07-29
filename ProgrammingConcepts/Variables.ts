//Variable is a container which can hold/store data values. 
//In TypeScript, variables can be declared using var, let, or const keywords.
//Specifying the data type of a variable is optional in TypeScript & Typescript. If we don't specify a data type, TypeScript will 
// infer the type based on the assigned value.

//let name: string = "John"; // explicitly specifying the data type
//let age = 30; // TypeScript infers the type as number based on the assigned value

//Difference between var vs let vs const in TypeScript
//1. var is generally not recommended to be used in modern TypeScript code, as it has function scope and can lead to issues like variable hoisting and 
// unintended overwriting of variables. We will use let and const keywords to declare variables in TypeScript.
//2. let - Will use when we need to change the value of a variable after its initial assignment. 
// It is block-scoped, meaning that it is only accessible within the block in which it is declared.
//3. const - will use when we don't want to change the value of a variable after its initial assignment.

//The 5 different aspects to be considered to differentiate between var, let and const keywords in TypeScript:
//1. Scope: 
//---------
// Scope is nothing but the accessible area of a variable.
// We have 2 types of scopes in Typescript - Function scope and Block scope. 
// Function scope means that the variable is accessible throughout the entire function in which it is declared, 
// while block scope means that the variable is only accessible within the block (e.g., a loop or an if statement) in which it 
// is declared.
// Ex => var is function-scoped, while let and const are block-scoped.

//2. Declaration/Value assignment: 
//--------------------------------
//Declaration is nothing but declaring a variable and assigning a value to it.
//var & let can be declared without initializing a value, while const must be initialized with a value at the time of declaration.

//3. Re-declaration:
//-------------------
//Re-declaration is nothing but declaring a variable again with the same name in the same scope.
//var allows re-declaration of variables, while let and const do not allow re-declaration of variables in the same scope.

//4. Re-Initialization:
//5. Hoisting: Hoisting is a behavior in JavaScript and TypeScript where variable and function declarations are moved 
// to the top of their containing scope during compilation.


//In summary, the main differences between var, let, and const in TypeScript are their scoping rules and whether 
// they can be reassigned or re-declared. In modern TypeScript development, it is generally recommended to use let and const for variable 
// declarations, with const being preferred for values that should not change.

var x = 10; // function-scoped variable
x = 23; // re-declaration is allowed

console.log(x); // Output: "Hello"