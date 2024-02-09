// trim()
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "Subhajit chaudhury";

//  if we just trim we wont be able to see the updated value we need to store that information in another variable or change the value of the variable before console log 

console.log (firstName.length);
let newName = firstName.trim()

console.log (newName);
console.log (newName.length);
// trim removes all the spaces from the string 

let upperName = newName.toUpperCase();
console.log (upperName);
// toUpperCase converts the string to uppercase 

let lowerName = newName.toLowerCase();
console.log(lowerName);
// toLowerCase converts the string to lowercase 


// start index
// end index

let newString = firstName.slice(0,4); //Subh
// it will start form 0 and go to 3 
console.log(newString);

