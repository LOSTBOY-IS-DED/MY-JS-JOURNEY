// while loop in array 
const fruits = ["apple","mango","grapes"];
const fruits2 = [];

let i = 0 ;
while (i<=fruits.length-1){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits);
console.log(fruits2);