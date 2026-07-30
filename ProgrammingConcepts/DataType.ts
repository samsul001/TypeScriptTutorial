//Javascript is a dynamically typed programming language. So, we can assign any type of value to a variable and 
// it can change types later in the program.
//Typescript is a statically typed programming language. So, we can assign a specific type of value to a variable and 
// it cannot change types later in the program.
//Type Safety: There is no type safety in javascript, but there is type safety in typescript

/*
let age: number = 30; // TypeScript infers the type as number based on the assigned value
age = "thirty"; // Error: Type 'string' is not assignable to type 'number'

console.log(age); // Output: "thirty" (execution continues despite the type error)      

let num:string = "5";
let num2:number =10; // Error: Type 'string' is not assignable to type 'number'
let sum:number = num + num2; // Error: Operator '+' cannot be applied to types 'string' and 'number'
console.log(sum)
*/

//Data Types in TypeScript:
//--------------------------
//1. Type/Data type - Type of the value that a variable can hold
//2. Annotations - The process of applying the data type to a variable is called annotation. 
//3. Type Inference - This is completely oppsite to annotation. Type will be automatically inferred by typescript based on the 
// value assigned to the variable.

let uName: string = "John"; // explicitly specifying the data type

//In the above example, stiring is the Type/data type & :string is the annotation. 

let age = 30;
//If we dont specify any data type for a variable, based on the value assigned to the variable, 
// typescript will automatically infer the data type for that variable.

//Types of Data Types in TypeScript:
//-------------------------------
//There are 2 categories of data types in TypeScript - 
//1. Primitive Data Types (Built-in types) 
//2. Non-Primitive Data Types (User-defined)

//Primitive Data Types in TypeScript:
//-------------------------------
//1. Number
//2. String
//3. Boolean
//4. Null
//5. Undefined
//6. Symbol
//7. BigInt
//8. Any
//9. Void
//10. Union

//Non-Primitive Data Types in TypeScript:
//-------------------------------
//1. Array
//2. Class
//3. Interface
//4. Object
//5. Function
//6. Tuple
//7. Enum
//8. Type Aliases
//9. Generics

//Primitive data types are holding single value, while non-primitive data types are holding multiple values.

//1. Number Data Type in TypeScript:
//-------------------------------
//represent both integer and floating-point numbers. TypeScript uses the same number type for all numeric values,

let weight: number = 70; // explicitly specifying the data type
let price: number = 19.99; // explicitly specifying the data type
let bigNum: number = 9007199254740; // explicitly specifying the data type

console.log(weight); // Output: 70
console.log(price); // Output: 19.99            
console.log(bigNum); // Output: 9007199254740

//2.String Data Type in TypeScript:
//-------------------------------
//represents a sequence of characters enclosed in single quotes, double quotes, or backticks.

let firstName: string = "John";
let lastName: string = 'Doe';
let fullName: string = `${firstName} ${lastName}`; // using template literals

console.log(fullName);

//3. Boolean Data Type in TypeScript:
//-------------------------------
//represents a logical value that can be either true or false.

let isActive: boolean = true;
let isCompleted: boolean = false;   

console.log(isActive); // Output: true
console.log(isCompleted); // Output: false

//4. Null & Undefined Data Types in TypeScript:
//-------------------------------
//Null represents the intentional absence of any object value, 
//while undefined represents a variable that has been declared but has not yet been assigned a value.

let nullValue: null = null; // explicitly specifying the data type
let undefinedValue: undefined = undefined; // explicitly specifying the data type

console.log(nullValue);
console.log(undefinedValue);

//5. any Data Type in TypeScript:
//-------------------------------
//represents a variable that can hold any type of value, So We loose the benefits of type safety when using the any type.

let randomValue: any = 10;
randomValue = "Hello"; // reassigning a string value
randomValue = true; // reassigning a boolean value

console.log(randomValue); // Output: true

//6. Union Data Type in TypeScript:
//-------------------------------
//represents a variable that can hold multiple types of values. 
//We can specify the allowed types using the pipe (|) symbol.

let id: number | string;
id = 30;
id = "ABC123"; // reassigning a string value
//id = true; // Error: Type 'boolean' is not assignable to type 'number | string'

console.log(id); // Output: "ABC123"

//7. void Data Type in TypeScript:
//-------------------------------
//void is a data type mainy used for functions that do not return a value.
//void is optional in typescript, if we dont specify any return type for a function, by default it is void.

function sum(a: number, b: number): void {
  let result = a + b;
  console.log(result);
}

sum(5, 10); // Output: 15