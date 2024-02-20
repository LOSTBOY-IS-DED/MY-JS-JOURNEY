// function declaration 

function singHappyBirthday (){
    console.log('Happy birthday to you');
}
singHappyBirthday();

function addTwoNumbers (a , b ){
    return a+b ;
}
addedResult= addTwoNumbers(4,6);
console.log(addedResult);

function isEven (number){
    if (number%2===0){
            return false ;
    }else {
        return true ;
    }
}

console.log(isEven(10));

function firstChar(anyString){
    return anyString[0];
}
console.log(firstChar("Neha"));

function findTarget (arr, target){
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