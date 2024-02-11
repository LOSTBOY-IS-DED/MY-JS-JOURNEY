// important array methods 

// const numbers = [4,2,5,8];

// function myfunc (number, index){
//     console.log(`index is ${index} number is ${number}`);
//     console.log (`${number}*2=${number*2}`);
// }

// multiplyBy2(numbers[0],0);
// for (let i=0 ; i < numbers.length;i++){
//     // console.log(i);
//     myfunc(numbers[i],i);
// }

// numbers.forEach(myfunc); //runs for each element same as loop (all iterations)

// numbers.forEach(function( number, index)){
//     console.log (numbers*3, index);
// }

const users = [
    {firstName: "subh", age: "19"},
    {firstName: "neha", age: "19"},
    {firstName: "ayush", age: "11"},
    {firstName: "souvik", age: "12"},
]

users.forEach(function(user){
    console.log(user.firstName);
}); //we  can make this a arrow function too 

for (let user of users ){
    console.log(user.firstName);
}
// This both is gonna perform the same thing
    





// forEach
// Map
// filter
// reduce 