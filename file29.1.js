// hwo to concatenate two arrays
let array1 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["items3","item4"]); //1st way
let array2 = [].concat(array1,["item3","item4"]);

console.log(array1);
console.log(array2);