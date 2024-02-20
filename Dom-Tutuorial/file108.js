// get multiple items using getElements by class name 
// get multiple items using querySelectorAll 

const navItems = document.getElementsByClassName("nav-item");
console.log(navItems); //this returns an HTML collection 
console.log(navItems[0]); 
console.log(navItems[1]); //these three works as array 
console.log(navItems[2]);
console.log(Array.isArray(navItems)); // using this we can check wether our element is array or not 

const navItems2 = document.querySelectorAll(".nav-item"); // this returns a node list (array like object so we can use indexing here too)
console.log(navItems2);
console.log(navItems[0]);
console.log(navItems[1]);
console.log(navItems[2]);
