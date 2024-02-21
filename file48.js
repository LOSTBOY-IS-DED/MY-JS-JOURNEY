// function inside function

const app = () => {
    const myfunc = () => {
        console.log("hello");
    }
    const addTwo = (num1, num2) => {
        return num1 + num2 ;
    }
    console.log("inside app");
    myfunc();
    console.log(addTwo(2,3));
}
app();