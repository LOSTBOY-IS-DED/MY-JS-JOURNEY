// some method 

const numbers = [
    3,5,8,9
]

// check is their is any number which is even 
const ans = numbers.some((number)=>number%2===0);
console.log(ans); // true means atleast one number is present which is even 

// nowCheck if there is any product in my cart which is going above 2 lakh rupees

const userCart = [
    {productId : 1, productName : "Mobile", price : 20000},
    {productId : 2, productName : "Laptop", price : 100000},
    {productId : 3, productName : "Television", price : 70000},
    {productId : 4, productName : "Macbook", price : 284000},
]

const check2l = userCart.some((cartItems)=>cartItems.price>200000);
console.log(check2l);