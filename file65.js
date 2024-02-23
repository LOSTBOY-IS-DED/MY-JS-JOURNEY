// splice method 
// start , delete , insert 
// this method changes the old array

const myArray = ['item1','item2','item3'];

//delete
myArray.splice(1,1); // this returns too we can store this in variable
console.log(myArray);  //[ 'item1', 'item3' ]

myArray.splice(1, 0, 'inserted item');
console.log(myArray); //[ 'item1', 'inserted item', 'item3' ]

// how to insert and delete together 
const deletedItem = myArray.splice(1,2,'inserted item 1', 'inserted item 2 ');
console.log(myArray);
console.log(deletedItem);