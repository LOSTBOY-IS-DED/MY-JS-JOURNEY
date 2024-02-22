// param destructuring 

// object 
// react 

const person = {
    firstname : "subh ",
    gender : "male"
}

printDetails = (obj) => {
    console.log(obj.firstname);
    console.log(obj.gender);
    // console.log(obj.age); //undefined
}

// printDetails(person);

// now what is parameter destructuring ?

printDetails2 = (firstname , gender) => {
    console.log(firstname);
    console.log(gender);
    // console.log(obj.age); //undefined
}

printDetails2(person);