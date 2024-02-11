function hello (){
    console.log("hello world");
}
// hello();
hello.call(); // this will also call the function 
// now we will learn about call , apply , bound 
// this is something important for an interview

// we can also declare the function outside the scope at once 
function about(hobby , favMusician){
    console.log( this.firstname, this.age, hobby, favMusician);
}

const user1 = {
    firstname : "subhajit",
    age : 19 ,
    // about : function (hobby , favMusician){
    //     console.log( this.firstname, this.age, hobby, favMusician);
    // }
}

const user2 = {
    firstname : "mohit",
    age : 17 ,
}

const user3 = {
    firstname : "Neha",
    age : 18 ,
}

about.call(user1,"guitar","arijit singh");
// user1.about.call(user2,"piano","shreya ghosal");
about.call(user2,"piano","shreya ghosal");

// apply 
// apply is also same as call the only difference is we apply a array instead of two different parameters
about.apply(user3 , ["guitar","eminem"]);

// bind
// bind does nothing but it returns a function 
const Func = about.bind(user1,"guitar","arijit singh");
Func();