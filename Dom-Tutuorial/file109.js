// array like object ---> indexing , length property 


let navItems = document.getElementsByTagName("a");
// I changed this constant to let coz i needed to convert my HTML collection into array 
// const navItems = document.getElementsByTagName("a");
console.log(navItems);
console.log(navItems.length);
// we cannot use foreach method to iterate through HTML collection
//simple for loop 
//for of loop 
//foreach 

// we are gonna try all three types of loops one by one for understanding make sure to uncomment the one to be used ...

// for (let i = 0 ; i < navItems.length; i++){
//     console.log(navItems[i]);
//     //lets perform a task and my task is to change background color and text color;
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight="bold";
    
// }

// for (let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight="bold";
// }


//now this method i did below will give you a error 

// navItems.array.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight="bold";
// });

// one more method we can do is we will change  HTML collection into a array 
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight="bold";
// });

//getElement property returns HTML collection 
//querySelector property returns node list 
// we saw dealing with HTML collection now lets see how to deal with node list 

let navitems = document.querySelectorAll("a");



//simple for loop 
//for of loop 
//forEach ( we can use foreach method too if we use querySelectorAll)

// for (let i = 0 ; i < navitems.length; i++){
//     console.log(navitems[i]);
//     //lets perform a task and my task is to change background color and text color;
//     const navitem = navItems[i];
//     navitem.style.backgroundColor = "#fff";
//     navitem.style.color = "green";
//     navitem.style.fontWeight="bold";
// }

// for (let navitem of navitems){
//     navitem.style.backgroundColor = "#fff";
//     navitem.style.color = "green";
//     navitem.style.fontWeight="bold";
// }

navitems.forEach((navitem) => {
    navitem.style.backgroundColor = "#fff";
    navitem.style.color = "green";
    navitem.style.fontWeight="bold";
})

navitems = Array.from(navitems);
console.log(Array.isArray(navitems));

//once we change our node list into array we can perform any other array method like map ,reduce , filter, push , pop , splice , slice 