// function returning function 

myfunc  = () => {
    return [1,2,3];
}
// we can return almost anything using a function but the crazy part starts when we return a function using function 

const ans = myfunc();
console.log(ans);

myfuncone = () => {
    function hola (){
        console.log(`hola`);
    }
    return hola;
}

const ans2 = myfuncone();
ans2(); // it became a function expression 
