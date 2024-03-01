// synchronous vs asynchronous programming language
// java script is a single threaded programming language

console.log("script starts");
const hello = () => {
    for(let i=1; i<100;i++){
        console.log("hello world")
    }
}
// setTimeout(hello, 2000);
const id = setTimeout(()=>{  // we can store this is a variable 
    console.log("Hello world");
},3000);

console.log("script ends"); 
clearTimeout(id);   //script starts // cleartimeout ensure that the setTimeOut shouldn't run 
                    // script ends