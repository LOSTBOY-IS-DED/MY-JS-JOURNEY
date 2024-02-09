// primitive vs refrence data types 

let num1 = 6 ;
let num2 = num1;
console.log ("value of num1 is", num1);
console.log ("value of num2 is", num2);

num1++;
console.log("after incrementing num1");
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);

// reference type array 
// array

let array1 = ["item1", "item2"];
let array2 = [array1];
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing new element");
console.log("array1", array1);
console.log("array2", array2);

//  in reference type the value of 2nd element will be changes too if there is a change in the array it is derived from ..

// primitive datatype is stored in stack 