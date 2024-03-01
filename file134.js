// promise 


console.log("Script starts");

const bucket = ['vegetables','salt','rice','sauces','ginger-garlic']; // if something is missing then it will give the error
// how to produce promise ??


const friedRicePromise= new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt")&&bucket.includes("rice")&&bucket.includes("sauces")&&bucket.includes("ginger-garlic")){
        //now we can call resolve its a method 
        resolve("Fried Rice"); // we can add object inside this too
    }else{
        // reject("Couldn't do it "); // in reject we can pass anything either a new error or simple string
        reject(new Error ("Something is missing from the cart")); // we can pass anything thats upto us 
    }
})

// we produces this promise 
//  now we need to consume the promise ( in real life as a js developer most of the times we will be consuming instead of producing the Promise)

// friedRicePromise.then((myfriedRice)=>{ // we can pass two callback function here first will check resolve and second will check reject 
//     console.log("Lets eat", myfriedRice) //Lets eat  Fried Rice
// },(error)=>{console.log(error)}) // this second call back will run when the promise gets rejected

//now we don't need to write two callback function coz its getting confusing 
// care about only one thing either the resolve or the error , can fill null in place of that or nothing 

friedRicePromise.then(
    (myfriedRice) => {
        console.log("lets eat", myfriedRice);
    }
    ).catch((Error) => {
    console.log(Error);
})

//promise is a asynchronous task ... its a browser feature not a js feature
//for prove m gonna create a loop 

for(let i=0;i<=100;i++){
    console.log("hello"+i);
}
console.log("Script Ends");
