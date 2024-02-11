// methods
// methods are function inside onject

// const person = {
//     firstName : "Souvik",
//     age : 12 ,
//     about : function (){
//         // console.log (`Person name is ${firstName} and age is ${age}`); //this will return error firstName is not defined for solving that we need to use this keyword
//         console.log (`Person name is ${this.firstName} and age is ${this.age}`);
//         console.log(this);
//         // this is the person's object
//     }
// }
// person.about();

function personInfo(){
    console.log (`Person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "subhajit",
    age : 18 ,
    about : personInfo
}
const person2 = {
    firstName : "neha",
    age : 18 ,
    about : personInfo
}
const person3 = {
    firstName : "souvik",
    age : 12 ,
    about : personInfo
}

personInfo(); // this function is just useless for now ...
person1.about();
person2.about();
person3.about();
