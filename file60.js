// sort method 
// till now foreach , map and filter were not mutating the array they were returning a new array 
// whereas reduce was returning a single value 
// but the sort method will mutate the array 

const numbers = [ 5, 8 , 100 , 12 , 1 , 126 ];
numbers.sort();
console.log(numbers); //[ 1, 100, 12, 126, 5, 8 ]

// why this happened ?
// javascript is not taking this as a number its taking this as a string 
// And in the basis of ASCII value its sorting this 

// now this has its pro and con
// pro : it sorts number in alphabetical order
// con : it doesn't sorts number but we have a solution

const userNames = ['subh','neha','ayush','souvik','ritz','Souvik'];
userNames.sort();
console.log(userNames); //[ 'Souvik', 'ayush', 'neha', 'ritz', 'souvik', 'subh' ]

// now solution of the con i am facing 
// sort also accepts a callback function
const num = [ 5, 8 , 100 , 12 , 1 , 126 ];
num.sort((a,b)=>{
    return a-b; //for descending order b-a 
});
console.log(num);

// How this works ?
// 5 , 8 
// a-b = 5-8
// a-b ---> positive(greater than zero) ---> b,a 
// b-a ---> negative(lesser than zero) ---> a,b

// more realistic example 
// price lowtohigh  or hightolow on shopping sites 

const products = [
    {productId : 1 , productName : "p1", price : 300},
    {productId : 2 , productName : "p2", price : 3000},
    {productId : 3 , productName : "p3", price : 200},
    {productId : 4 , productName : "p4", price : 8000},
    {productId : 5 , productName : "p5", price : 500},
]
// low to high 
// products.sort((a,b)=>{
//     return a.price - b.price
// });
// console.log(products); // now the array is sorted

// if we dont want to change the actual array we can clone this 
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price
});
console.log(products);
console.log(lowToHigh);