//! FUNCTION DECLERATION
/*
function mornignMessage(){
    console.log("Good Mornign");
}
mornignMessage();
mornignMessage();
*/


//! FUNCTION HOISTING
/*
 mornignMessage()
function mornignMessage(){
    console.log("Good Mornign");
};

//example 2
let x = addfun(4,5);
console.log(x);
function addfun(a,b){
    return a+b;
}

*/

//! FUNCTION EXPRESSION
// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable:

/*
const sayName = function(){
    console.log("dhiraj");
}
sayName();

*/


//! ARROW FUNCTION
/*
const sayHello = ()=>{
    console.log("hello")
}
sayHello()
*/

//! ONE LINE ARROW FUNCTION
/*
const addsum = (a,b)=> a+b ;
console.log(addsum(2,5))
*/


//!ANONYOMOUS FUNCTION
/*
setTimeout(function () {
    console.log("This is an anonymous function");
  }, 1000);
*/
  

//! FUNCTION CUNSTRUCTOR
/*
const myFunction = new Function("a","b","return a * b")
let x = myFunction(3,5)
console.log(x);
*/
/*
const myFunction = function (a,b) {return a * b }
let x = myFunction(3,5)
console.log(x);
*/

//! SELF INVOKING FUNCTION 
/*
(function greet(){
    console.log("good afternoon")
})()
*/




function outer() {
    return function () {
      return "Inner Function";
    };
  }
  outer();
//   const innerFn = outer();
//   console.log(innerFn());
