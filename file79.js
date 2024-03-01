const obj1 = {
  key1: "value1",
  key2: "value2",
};
// const obj2 = {
//   key3: "value3",
// };

//now i want that if i try to console.log the value of key1 of object 2 it should give the value present in obj1
const obj2 = Object.create(obj1);
obj2.key3 = "value3";

console.log(obj2.key3);
console.log(obj2.key1);

// now this is happening
console.log(obj2);
