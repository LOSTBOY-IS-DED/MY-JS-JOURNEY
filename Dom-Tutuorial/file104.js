// select element using query selector

const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);
// The best way to select an element in JavaScript depends on the specific needs of your project. If you know the ID of the element, then getElementById() is the fastest and most efficient method. If you need to select all elements of a certain type, then getElementsByTagName() or getElementsByClassName() may be a better choice. If you need to select an element based on its position in the document, then querySelector() or querySelectorAll() may be the best option.

// how to select any button using querySelector
// get the class of the element 

const header = document.querySelector(".header");
console.log(header);

const navItem = document.querySelector(".nav-item");
console.log(navItem);


const navItem2 = document.querySelectorAll(".nav-item");
console.log(navItem2);
// this querySelectorAll will return a node list which will look like an array but its not array