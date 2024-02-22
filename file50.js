// block scope vs function scope 

// let and const are block scope

//var is a function scope 

{
    let firstname = "subh";
    console.log(firstname);
}


{
    let firstName = "neha";
    console.log(firstName);
}

const firstName = "ayush";
console.log(firstName);

// we can use the variable outside the scope 

{
    var anoptherName = "souvik";
}
console.log(anotherName);

// confusing point is function scope vs lexical scope 