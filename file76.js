// const user1 = {
//     firstName : "Subh",
//     age : 19,
//     class : "B.TECH ",
//     stream : "CSE",
//     about : function (){
//         console.log(this.firstName , this.age, this.class, this.stream);
//     }
// }

//alternative for writing this 

const user1 = {
    firstName : "Subh",
    age : 19,
    class : "B.TECH ",
    stream : "CSE",
    about(){
        console.log(this.firstName , this.age, this.class, this.stream);
    }
}
user1.about();