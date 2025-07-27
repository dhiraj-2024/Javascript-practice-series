##### _______________________________________________________________________________________________ by Dhiraj Barwal
# 1. JavaScript Functions
### 🔹 Function Declaration
```javascript
function mornignMessage(){
    console.log("Good Mornign");
};
morningMessage();

output:Good Mornign
```
---
### 🔹 Function Hoisted
#### - You can call it before it's defined in  code.
```javascript
mornignMessage() 
function mornignMessage(){
    console.log("Good Mornign");
};

output: Good Mornign
```
---
### 🔹 Function Expression
#### -  Define a function and assign it in a variable
```javascript
  const sayName = function(){
      console.log("dhiraj");
  };
  sayName();

output:dhiraj
```
 #### -  Not hoisted (you can't call it before defining it).
 ```javascript
 sayName(); // ❌ error: sayName is not a function 
 const sayName = function(){
    console.log("dhiraj");
 }

output: dhiraj
 ```
---
### 🔹 Arrow Functions
#### - Inroduces in Es6 
#### - offers a shorter syntax
#### - Can be used in oneliners

```javascript
const sayName = ()=>{
    console.log("dhiraj");
};
sayName()

output: dhiraj
```
#### - oneliner arrow function
```javascript
const addsum = (a,b)=> a+b ;
console.log(addsum(2,5))

// output: 7
```
---
### 🔹 Anonymous Functions
#### - A function without a name
#### ** Used often in **

- Function expressions

- Callbacks

- Immediately Invoked Function Expressions (IIFE)
```javascript
setTimeout(function () {
  console.log("This is an anonymous function");
}, 1000);

// output: This is an anonymous function
```
### 🔹 First-Class Functions (functions as values)
#### - Functions can be assigned to variables, passed as arguments, or returned from other functions.
```javascript
function greet() {
  return "Hello!";
}

// Assigned to a variable
const sayHello = greet;
console.log(sayHello()); // "Hello!"

// Passed as an argument
function callMe(fn) {
  console.log(fn());
}
callMe(greet); // "Hello!"

// Returned from a function
function outer() {
  return function () {
    return "Inner Function";
  };
}
const innerFn = outer();
console.log(innerFn()); // "Inner Function"

```
---
🎯 **Summary Table — JavaScript Function Types**

| Concept                 | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Function Declaration** | Classic function using `function` keyword; hoisted.                         |
| **Function Expression**  | Assigned to a variable; not hoisted.                                       |
| **Arrow Function**       | Shorter syntax; no own `this`; best for small logic & callbacks.            |
| **Anonymous Function**   | A function with no name; common in expressions and callbacks.               |
| **First-Class Function** | JS treats functions as values: can be passed around like data.             |
