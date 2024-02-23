// filter method

const numbers = [1 ,3, 2 ,6, 4, 8 ];
// in this task lets filter even and odd numbers
// filter method will take a callback function 
// it will always return true or false

const isEven = (number) => {
    return number%2 === 0 ;
}
const isOdd = (number) => {
    return number%2 !== 0 ;
}

const evenNumbers = numbers.filter(isEven); // it will pass the element from numbers one by one
console.log(evenNumbers);

const oddNumbers = numbers.filter(isOdd); // it will pass the element from numbers one by one
console.log(oddNumbers);