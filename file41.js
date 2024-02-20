// spread operator in object

const newArray =  [ ... "abc"]; // we cant use integer instead of strings coz integer are not iterable ...
console.log(newArray); /// [ a , b, c ]

const obj1 = {
    key1 : "value1" ,
    key2 : "value2" ,
    // we cant use same key two times
}
const obj2 = {
    // if we add another key named key here 1 then it will change the value of key1 depending upon the order written in the variable 
    key1 : "ValueUnique", //{ key1: 'ValueUnique', key2: 'value2', key3: 'value3', key4: 'value4' }
    key3 : "value3" ,
    key4 : "value4" ,
    // we cant use same key two times
}
console.log(obj1);
const newObj = { ...obj1, ...obj2}; //{ key1: 'ValueUnique', key2: 'value2', key3: 'value3', key4: 'value4' }
const newObj2 = { ...obj2, ...obj1}; //{ key1: 'value1', key3: 'value3', key4: 'value4', key2: 'value2' }
console.log(newObj2);
const newobj3 = {..."aksdsdfkjdskfjsdlkfjldskfjdsalk"}
// this will spread the string and the index will become the key 
console.log(newobj3);