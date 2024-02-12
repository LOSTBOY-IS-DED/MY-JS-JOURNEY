function mySelf (hobbies , favSinger ){
    console.log ("user first name is" ,this.firstName, "his age is" ,this.age, "he is doing " ,this.class, "his stream is " ,this.stream, "his hobby is" ,hobbies, "his fav singer is ",favSinger);
}
function FemaleSelf (hobbies , favSinger ){
    console.log ("user first name is" ,this.firstName, "her age is" ,this.age, "she is doing " ,this.class, "her stream is " ,this.stream, "her hobby is" ,hobbies, "her fav singer is ",favSinger);
}
const user1 = {
    firstName : "Subh",
    age : 19,
    class : "B.TECH ",
    stream : "CSE",
    about : function (){
        console.log(this.firstName , this.age, this.class, this.stream);
    }
}
const user2 = {
    firstName : "Neha",
    age : 19,
    class : "B.TECH",
    stream : "CSE",
}
const user3 = {
    firstName : "Ayush",
    age : 12,
    class : "higher secondary",
    stream : "CSE",
}


// user1.about.call(user1);
// user1.about.call(user2); // this is like borrowing the about function from user 1 to user 2 

mySelf.call(user1,"guitar","arijit singh");
FemaleSelf.apply(user2,["singing","billie elish"]);
const FuncBind = mySelf.bind(user3,"guitar","Eminem")
FuncBind();

//  these are important from interview perspective 
// call is user to run the function for eg : hello.call();
// apply is just same as call but it takes a array as parameters
// meanwhile bind does nothing but it returns from a function which we can store in a variable as a function expression...