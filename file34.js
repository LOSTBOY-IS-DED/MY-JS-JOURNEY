//for in loop array

const fruits = ["apple","mango","grapes","fruit4"];
const fruits2 = [];

for (let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
console.log(fruits2.length);
