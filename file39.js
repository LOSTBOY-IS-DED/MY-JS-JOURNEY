// how to iterate object ?
// there are two ways 
// 1. for in loop 
// 2. Object.keys

const person = {
    name:"subh",
    age:22,
    "person hobbies" : ["guitar", "coding", "listening music"]
};

for (let key in person){
    // console.log(key);
    // console.log(person[key]);
    // console.log(`${key} : ${person[key]}`)
    console.log(key, ":",person[key]);
}

const person2 = {
    name:"subh2",
    age:24,
    "person hobbies" : ["guitar", "coding", "listening music"]
};

console.log(Object.keys(person2)); // this returns an array of keys 
console.log(typeof Object.keys(person2));
const val = Array.isArray((Object.keys(person2)));
console.log(val);

for (let key of Object.keys(person2)){
    console.log(key, person[key]);
}