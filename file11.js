// undefined 
// null 

let firstName ;
console.log (typeof firstName);
// when we declare a variable without assigning a value to it you can do this in case of const

// const age ;
// console.log (typeof age );
//  this will give a error

let myVariable = null;
console.log (myVariable);
console.log (typeof null);
// this is a bug or error



//BigInt

let num = 123768765658789877698769876968787659875865987697;
console.log (Number.MAX_SAFE_INTEGER);
// for checking the max safe integer we can use 
// for converting the integer into big int we can do 
// let num1 = BigInt(123768765658789877698769876968787659875865987697);
// let num = 123768765658789877698769876968787659875865987697n;
// cannot add bigint with any other integer it will return and error
console.log (num);
// console.log (num1);