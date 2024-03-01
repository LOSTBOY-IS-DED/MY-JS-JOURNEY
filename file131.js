// setInterval 

// console.log("script starts");
// setInterval(()=>{
//     console.log(Math.random());  //kinda same as setTimeout 
// },1000);
// console.log("script end");

// make a mini project create a button in the middle with changing color in the background stop the changing of color when clicked 

const body = document.body;
const button = document.querySelector("button");
const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.background= rgb;
},1000);

button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.textContent = body.style.background;
});

console.log(intervalId);