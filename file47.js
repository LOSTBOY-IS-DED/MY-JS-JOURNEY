// hoisting 

hello();
function hello (){
    console.log("hello");
}

// in case of function declaration we can call the function even before creating them but we cant do the same in case of function expression

const sayHello = function(){
    console.log("say hello");
}
console.log(sayHello);

