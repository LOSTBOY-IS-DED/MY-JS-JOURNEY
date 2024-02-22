// rest parameters 

function myfunc(a,b,c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

// myfunc(3,4,5,6,7,8,9,10);

function myfunc2(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

// myfunc2(3,4,5,6,7,8,9,10);

function addAll(...numbers){
    let total = 0 ;
    for (let number of numbers){
        total = total+number;
    }
    return total;
}
const ans = addAll(1,2,3,4,5);
console.log(ans);