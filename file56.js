// important array methods 

const numbers = [4,2,5,8];

function myfunc (number, index){
    console.log(`index is ${index} number is ${number}`);
    console.log (`${number}*2=${number*2}`);
}

// multiplyBy2(numbers[0],0);
for (let i=0 ; i < numbers.length;i++){
    // console.log(i);
    myfunc(numbers[i],i);
}

// forEach
// Map
// filter
// reduce 