// arrow function 

const singHappyBirthday = () => {
    console.log("happy birhtday to you ...");
}
singHappyBirthday();

const addTwoNumbers = (a , b ) => {
    return a+b ;
}
addedResult= addTwoNumbers(4,6);
console.log(addedResult);
// we can remove the parenthesis bracket from parameters if we have only one parameter 

const isEven = (number) => {
    if (number%2===0){
            return false ;
    }else {
        return true ;
    }
}
//const isEven = number => number%2===0; we can write the same 

console.log(isEven(10));

const firstChar = (anyString) =>{
    return anyString[0];
}
console.log(firstChar("Neha"));

const findTarget = (arr, target) => {
    for (let i = 0 ; i<arr.length; i++){
        if(arr[i]===target){
            return i ;
        }
    }
    return -1 ;
}
const myArray = [1, 3, 8, 90];
const ans = findTarget(myArray, 8);
console.log(ans);