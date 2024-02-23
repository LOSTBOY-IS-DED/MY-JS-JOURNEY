const myArray = ["hello","cat","dog","lion"];
// const isLength = (string) => {
//     return string.length ===3 ;
// }

// const res = myArray.find(isLength);
const res = myArray.find((string) => string.length ===3);
console.log(res);


// now realistic example

const users = [
    {userId : 1 , userName : "subh"},
    {userId : 2 , userName : "neha"},
    {userId : 3 , userName : "ayush"},
    {userId : 4 , userName : "LOST"},
    {userId : 5 , userName : "HAZEL"},
]

// we can use this method on unique values

const resofUser = users.find((user)=>user.userId === 3);
console.log(resofUser);
