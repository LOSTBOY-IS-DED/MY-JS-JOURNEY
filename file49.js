// lexical scope 

function myApp (){
    const myVar = "value1";
    function myFunc (){
        const myVar = "value69"; // if we comment this line we will get the value from outside the scope 
        console.log("inside myFunc",myVar);
    }
    const myFunc2 = function(){}
    const myFunc3 = () => {}
    console.log(myVar);
    myFunc();
}
myApp();