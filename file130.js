// synchronous vs asynchronous programming language
// java script is a single threaded programming language

console.log("script starts");
const hello = () => {
    for(let i=1; i<100;i++){
        console.log("hello world")
    }
}
setTimeout(hello, 2000);

console.log("script ends"); 