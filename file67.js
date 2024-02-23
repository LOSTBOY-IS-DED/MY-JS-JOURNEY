// set (it is iterable)
// store data 
// sets also have its own methods 
// No index-based access
// Order is not guaranteed
// Unique items only ( no duplicates allowed)

const numbers = new Set([]); // this is how we declare set 
numbers.add(1);// we can add element using add property 
numbers.add(2);
numbers.add(3);
numbers.add(4);
console.log(numbers);

if (numbers.has(1)){   // has is used to check if the element is present
    console.log('1 is present');
}else {
    console.log('1 is not present');
}

for (let number of numbers){
    console.log(number);
}
// we cant have duplicate items in set it will ignore the element 

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(myArray);
console.log(uniqueElements); 
console.log(uniqueElements.size); 