//1. For Loop 
/*
NOTES:

- It have 3 expression  (let i=0; i<=10; i++)
- i=0; :- starting expression 
- i<=10; :- loop stopping condition 
- i++; :- updation state
*/

// 1. example

/*
for (let i=0; i<=10; i++){
    console.log("dhiraj")
}
*/

// 2. example  

// 1. calculate the sum of 1 to 5 
/*
let sum = 0;
for( let i=0; i<=5; i++){
 sum = sum + i;
}
console.log(sum); // 15
*/


// 2. While loop
/*
NOTES:
- let i = 0; :- starting state define before starting loop
- ( i <= 10 ) :- loop stopping condition 
- i++; :- updation state write inside the while loop block
- WARNING: if you forgot to updation state it goes infinite loop 
*/

// 1. example

/*
let i = 1;
while(i<=10){
    console.log(i)
    i++;
}
*/


// 2. example 

/*
let j = 1;
let sum = 1;
while (j<=10) {
    sum += j;
    j++; 
}
console.log("sum :",sum)
*/


// 3. do while loop

/*
NOTES:
- let i = 0; :- starting state define before starting loop
- ( i <= 10 ); :- loop stopping condition write at last with while after curly brases , semicolon are required to close the loop
- i++; :- updation state write inside the while loop block
- INFORMATION: do while loop always runs ones if condition is wrong 
- WARNING: if you forgot to updation state it goes infinite loop 
 */

// 1. example

/*
let i= 1;
do{
 console.log(i);
 i++;
}while(i<=20);

*/


// SPECIAL TYPE OF FOR LOOPS 

// 1. for of loop 

/*
NOTE:
- Generally used for the Operation perform on the array and strings.
- There is no need to define starting state and ending state  it takes automatically.
- Variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
- Iterable - An object that has iterable properties.
*/

// SYNTAX
/*
for (variable of iterable) {
  // code block to be executed
}
*/

// 1. example with array
 
const cars =["bmw","tata","suzuki","mahindra","toyota","hundai"]

for(let val of cars){
    console.log(val)
}


// 2. example with strings

const text = "LeranJavascript";

for(let val of text){
    console.log(val)
}


// 1. for in loop 

/*
NOTE:
- Generally used for the Operation perform on Objects.
- There is no need to define starting state and ending state  it takes automatically.
- It returns keys of the object
- Iterable - An object that has iterable properties.
*/

// SYNTAX
/*
for (key in object) {
  // code block to be executed
}
*/

// 1. example 

const student = {
    name:"dhiraj",
    age:22,
    cgpa:8.0,
    isPass:true
}

for(let key in student){
    console.log("keys =",key,"values =",student[key])
}