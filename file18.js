// if 
// else if
// else if 
// else if 
// else
const prompt = require('prompt-sync')();


let tempInDegree = +prompt("Enter the temperature of your area ");

if(tempInDegree<0){
    console.log("extremely cold outside");
}else if (tempInDegree<16){
    console.log("it is cold outside");
}else if (tempInDegree<25){
    console.log("weather is okay !!");
}else if (tempInDegree<35){
    console.log("Lets go for swim");
}else if (tempInDegree<45){
    console.log ("turn on AC");
}else{
    console.log("too hot !!");
}