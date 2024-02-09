// difference between dot notation and bracket notation

const key = "email";
const person = {
    name:"subh",
    age:22,
    "person hobbies" : ["guitar", "coding", "listening music"]
};
console.log(person["person hobbies"]);
// cant use these space in dot notation it will give syntax error
person[key]= "subhajitchaudhury05@gmail.com";
console.log(person);