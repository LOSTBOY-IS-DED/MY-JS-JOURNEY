//  how to iterate object

const person = {
    name:"subh",
    age:22,
    "person hobbies" : ["guitar", "coding", "listening music"]
};

// for in loop 
// Object.keys

// for (let key in person ){
//     console.log(key,":", person[key]);
// }

// console.log(Object.keys(person)); //this object.keys will return me a array
// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

for (let key of Object.keys(person)){
    // console.log(key);
    ;console.log(person[key])
}