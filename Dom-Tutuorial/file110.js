// innerHTML
const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);

// lets change the innerHTML
headline.innerHTML= "<h1>Inner HTML changed</h1>";
headline.innerHTML += "<button class =\"btn\">learn more</button>";
// we cant use "" inside "" that s why we use backslash
console.log(headline.innerHTML);