// closures
// closure : 30% - 49%
// analyze : 70% to 80%
// real example : 100%

// function can return function

function outerfunction() {
  function innerfunction() {
    console.log("hello world!");
  }
  return innerfunction;
}
const ans = outerfunction(); // this is returning a function [Function: innerfunction]
console.log(ans); // this became kinda function expression
ans();

function printFullName(firstName, lastName) {
  function printName() {
    console.log(firstName, lastName);
  }
  return printName;
}
const name = printFullName("subhajit", "Chaudhury");
name();
