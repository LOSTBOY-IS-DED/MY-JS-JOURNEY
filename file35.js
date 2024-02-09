// array destructuring

const myArray= ["value1", "value2"];
const myArray2= ["value1","value2","value3"]
let [myvar1, myvar2]= myArray;
let [myvar3, , myvar5]= myArray2;

console.log(myvar1);
console.log(myvar2);
console.log(myvar3);
console.log(myvar5);

// this will act as normal variable  
// try array destructuring again