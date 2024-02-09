// nested if else 

// winning number 19 
// 19 your guess is right 
//  17 too low 
// 20 too high 

let winningNumber = 19 ;
let userGuess =  +prompt("guess a number");
// console.log (userGuess)
// console.log (typeof userGuess , userGuess);
// prompt take input as string

if (userGuess === winningNumber){
    console.log("your guess is right!!");
}else {
    // console.log ("your guess is wrong!!!");
    if (userGuess<winningNumber){
        console.log("too low !!!");
    }else {
        console.log("too high !!!");
    }
}