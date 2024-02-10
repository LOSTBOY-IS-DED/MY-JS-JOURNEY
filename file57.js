// map method 

// const numbers = [3,4,6,1,8];
// const square =function(number){
//     return number*number;
//     // its crucial to return while using map
// }

// const squareNumber =numbers.map(square);
// console.log(squareNumber);
//this is a callback function this will always make a new array and we can save this in VARIABLE

const users = [
    {firstName: "subh", age: "19"},
    {firstName: "neha", age: "19"},
    {firstName: "ayush", age: "11"},
    {firstName: "souvik", age: "12"},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);