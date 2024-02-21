// objects inside array 
// this is very useful in real world application 

const users = [
    {userId : 1 , FirstName : "Subh", gender : "male"},
    {userId : 2 , FirstName : "Neha", gender : "female"},
    {userId : 3 , FirstName : "Ayush", gender : "male"}
]

// for (let user of users){
//     console.log(user);
//     console.log(user.FirstName)
// }

// nested destructuring 
const users2 = [
    {userId : 1 , FirstName : "Subh", gender : "male"},
    {userId : 2 , FirstName : "Neha", gender : "female"},
    {userId : 3 , FirstName : "Ayush", gender : "male"}
]
const [user1, user2 , user3] = users2;
console.log(user1);

// if we want the userId of user1 , and gender of user 3 how we can do that ?

const [{FirstName}, , {gender}]= users2;
console.log(FirstName);
console.log(gender);
