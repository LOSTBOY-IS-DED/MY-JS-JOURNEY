// intro to array 
//  reference type 
//  how to create arrays 

//  ordered collection of items
// we can store any of the datatypes in array we can even store array in array


// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1, 2, 2, 3 , "string", null , undefined ];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);

// now how to change itmes in Array ??

let fruits = ["apple", "mango", "grapes"];
console.log (fruits);
fruits[1]= "pineapple";
console.log (fruits);
console.log (typeof fruits);
// arrays are mutable 

//  To check if the fruits is actually an array 
console.log (Array.isArray(fruits));
// this will return true or false 


// array indexing 