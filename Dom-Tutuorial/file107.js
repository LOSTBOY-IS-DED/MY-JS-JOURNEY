// get and set attributes 
// we can get the attribute of an element using getAttribute

const link = document.querySelector("a");
console.log(link); //link is a object here
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(1));
// this will select the first anchor tag of the HTML file 
// in html file inside li class and href are example of attributes

link.setAttribute("href", "https:/codprog.com");
console.log(link.getAttribute("href"));


// const inputElement =  document.querySelector(".from-todo input");
// console.log(inputElement.getAttribute("type"));