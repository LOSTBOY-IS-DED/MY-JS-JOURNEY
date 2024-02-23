// reduce method 

const numbers = [1,2,3,4,5,10];
// aim : sum of all the numbers in array 
// its gives one value in return 

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue ;
}); //here we can add a initial value too which will become the accumulator

console.log(sum);

// accumulator , currentValue , return 
//     1              2            3
//     3              3            6  
//     6              4            10
//     10             5            15
//     15             10           25 

// the return will become the accumulator in next run 

// lets see another example 

const userCart = [
    {productId : 1, productName : "Mobile", price : 20000},
    {productId : 2, productName : "Laptop", price : 100000},
    {productId : 3, productName : "Television", price : 70000},
]
// we can add the total amount using for loop but reduce will make it more conveneint ...
const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price ;
},0);

console.log(totalAmount);