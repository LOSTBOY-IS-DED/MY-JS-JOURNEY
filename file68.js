// map 
// map is iterable 

// store data in ordered function 

// store key value pair like object 
// duplicate keys are not allowed like object

// different between map and objects

// objects can only have string or symbol as keys like array , number and string 

const person = { // this is also knowns as object literal 
    // key --> string 
    // key --> symbol
    firstName : 'subhajit',
    age : 19 ,
    1 : "one"
}

console.log(person.firstName);
for (let key in person ){
    console.log( typeof key);
}