// arrow function

// const user1 = {
//     firstName : "Subh",
//     age : 19,
//     class : "B.TECH ",
//     stream : "CSE",
//     about : function (){
//         console.log(this.firstName , this.age, this.class, this.stream);
//     }
// }

// user1.about();

// now lets make this about a arrow function
// arrow function dont have their own this , this is taken from the surroundings
// u cant change this  in arrow function
// for arrow function this will be one level up in this case window object

const user1 = {
    firstName : "Subh",
    age : 19,
    class : "B.TECH ",
    stream : "CSE",
    about : () => {
        console.log(this.firstName , this.age, this.class, this.stream);
    }
}

user1.about(user1);