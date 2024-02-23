// every method

const numbers = [2,3,4,6,8,10];

// function isEven (number){
//     return number%2===0;
// }
// const ans = numbers.every(isEven);
const ans = numbers.every((number)=> number%2 === 0);
console.log(ans);

const userCart = [
    {productId : 1, productName : "Mobile", price : 20000},
    {productId : 2, productName : "Laptop", price : 100000},
    {productId : 3, productName : "Television", price : 70000},
]

//check every product whose price is below 70000

const res = userCart.every((cartItem)=> cartItem.price<70000);
console.log(res);