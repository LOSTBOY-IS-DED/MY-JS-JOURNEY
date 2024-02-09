// how to clone array 



let array1 = ["item1","item2"];
//let array2 = ["item1","item2"]; //we wont use this method when we will have large number of elements in array

// let array2= array1.slice(0);

// let array2= [].concat(array1);

let array2 = [...array1]; // this is know as spread operator its a new way of cloning an array .


// if we want that the elements of array2 don't change then we need to write the same code again rather than initializing like array1 === array2 so that different memory location can be created in a head 
array1.push("item3");


console.log(array1===array2);

console.log(array1);
console.log(array2);

//new way of cloning array using spread operator ...
