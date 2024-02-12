

const user1 = {
    firstName : "Subh",
    age : 19,
    class : "B.TECH ",
    stream : "CSE",
    about : function (){
        console.log(this.firstName , this.age, this.class, this.stream);
    }
}

//dont do this mistakes

// user1.about();
// const myFunc = user1.about; // we will get the error undefined

// why are we getting the undefined error ?? 
// because we are just storing the reference not calling the function so it wont bind with myfunc for binding we need to use my myfunc and pass the user to the function
const myFunc = user1.about.bind(user1); 
myFunc();