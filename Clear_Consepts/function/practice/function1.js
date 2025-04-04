//! function decleration
function mornignMessage(){
    console.log("Good Mornign");
}
// mornignMessage();
// mornignMessage();

//! function hoisting
// mornignMessage()
function mornignMessage(){
    console.log("Good Mornign");
};

//! function expression
const sayName = function(){
    console.log("dhiraj");
}
// sayName();

//! Arrow function
const sayHello = ()=>{
    console.log("hello")
}
// sayHello()

//! one line arrow function
const addsum = (a,b)=> a+b ;
// console.log(addsum(2,5))

//!anonynous function
// setTimeout(function () {
//     console.log("This is an anonymous function");
//   }, 1000);
  

function outer() {
    return function () {
      return "Inner Function";
    };
  }
  outer();
//   const innerFn = outer();
//   console.log(innerFn());
