// for loop in array 
// length is the most important property of array it returns the length of the array 

let fruits = ["apple","mango","grapes","banana"];

console.log(fruits.length);
console.log(fruits[fruits.length-1]);

let fruits2 = [];

for (i=0; i<=fruits.length-1;i++){
    fruits2.push(fruits[i].toUpperCase());
    console.log(fruits2)
}
