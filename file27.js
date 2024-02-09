// array push pop
// // array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log (fruits);

// fruits.push("banana");
// console.log (fruits);

// fruits.pop();
// console.log(fruits);
// // this pop will remove from the last of array we can all print the removed item 
// console.log(fruits.pop());
// let poppedFruit = fruits.pop() ;
// console.log ("popped fruit is ", poppedFruit);
// array is mutable this method can change original array this doesn't happens in the case of string 


// unshift will add the element from starting

//  shift will remove the element from starting
let removedFruit = fruits.shift();
console.log (fruits);
console.log ("removed fruit is" , removedFruit);

// push and pop is faster than shift and unshift 
// coz push and pop will add/remove the element from last whereas shift unshift need to save the element to the memory before returning 
