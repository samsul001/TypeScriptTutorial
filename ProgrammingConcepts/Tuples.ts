//Tuples
//A Tuple is a fixed length Array where each element has a specific type
//It helps in storing multiple fields of different data types together

//Example 1: Tuple with 2 values of string , number
let data:[string,number] = ['yellow',34];
console.log(data)

console.log(data[0]);
console.log(data[1])

//Example 2: Tuple with multiple values
let data1:[string,boolean,number,string,number]= ['red',false,23,'white',11]
console.log(data1)
console.log(data1[3])
console.log(data1[2])

//Example 3: Iterating Tuple with traditional for loop
console.log(`...Iterating Tuple using traditional for loop...`)
for(let i=0; i<data1.length; i++){
    console.log(data1[i])
}

//Example 4: Iterating Tupe with for in loopo
console.log(`.....Iterating Tuple using for in loop.....`)
for(let i in data1){
    console.log(data1[i])
}

//Example 5: Iterating Tuple using for of loop
console.log(`......Iterating Tuple with using for of loop.......`)
for(let j of data1){
    console.log(j)
}

//Example 6: Tuple Array (Array of Tuple) => It is similar like Array of strings and numbers.
let students:[number, string][] = [ [101,'Samsul'], [102,'Alam'], [103, 'Majeeth'], [104, 'Sathish'] ];
console.log(students.length);
console.log(students)
console.log(students[3])
//Iterating Tuple array and iterating one more time the inside array to put a check condition
for(let i=0; i<students.length; i++){
    for(let j=0; j<students[i].length; j++){
        let val = students[i];
        if(val[j+1] === 'Majeeth'){
            console.log(`Id of student: ${val[j]}`)
        }
    }
}