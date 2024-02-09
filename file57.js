// important array methods 

// forEach 
// map
// filter
// reduce 

const numbers = [4, 2, 5, 8];

function multiplyBy2( number, index){
    console.log ("index is ", index);
    console.log ('${number}*2 = ${number*2}');
}

for(let i = 0 ; i<numbers.length; i++){
    multiplyBy2(numbers[i],i)
}