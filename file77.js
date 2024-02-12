// proto , prototype , class

const user = {
    firstName : "Subhajit" ,
    lastName : "Chaudhury",
    email : "subhajitchaudhury05@gmail.com",
    age : 19,
    address : " House Number, Colony , Pincode, State",
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18  ;
    }
}

console.log("hello world");