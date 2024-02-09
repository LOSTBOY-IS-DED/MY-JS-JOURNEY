// console.log("happy birthday to you....")
// lets create this as a function

// function singHappyBirthday(){
//     console.log ("happy birthday to you ...");
// }

// what are function expressions ?
// we can store a function in a variable and that is known as function expression

const singHappyBirthday = function(){ //this is function expression this will exact act same as function
    console.log ("happy birthday to you  ...");
}

singHappyBirthday();
// function twoPlusFour(){
//     console.log(2+4);
// }
// twoPlusFour();
// this code is not reusable so we need to write reusable code 


function addTwoNumbers(num1 , num2){
    return num1+ num2 ;

const returnedValue = addTwoNumbers(4,5);
console.log(returnedValue);

function addThreeNumbers(num1 , num2, num3){
    return num1+ num2+ num3 ;
}
const returnedValue2 = addThreeNumbers(4,5,9);
console.log(returnedValue2);

function isEven(num1){
    if (num1%2 === 0){
        return true ;
    }
    return false;
}

let checkEven= isEven(24);
console.log (checkEven);

function findTarget(array, target){
    for (let i = 0; i<array.length; i++){
        if (array[i]===target){
            return i;
        }
    }
    return -1;
}

const myArray = [1, 3 , 8 ,90]
const ans = findTarget(myArray,8);
console.log(ans);
}
// "workbench.colorTheme": "shades of midnight blue dark theme",
    // "code-runner.clearPreviousOutput": true,
    // "code-runner.runInTerminal": true,