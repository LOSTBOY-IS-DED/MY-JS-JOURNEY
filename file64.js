// fill method 
// value , start , end 

const myArray = new Array(10).fill(-1);
console.log(myArray);
// this ia the first usecase which is to full the array 

const myArray2 = [1,2,3,4,5,6,7,8];
myArray2.fill(0,2,4) // this will change the original array 
console.log(myArray2); 
// [
//     1, 2, 0, 0,
//     5, 6, 7, 8
//   ]