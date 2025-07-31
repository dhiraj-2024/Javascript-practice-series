// Comparision operators
// compare two values and return boolean (true or false)

let a = 10 ;
let b = 14 ;

console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);


// Logical Operators

//&& 
let age = 20;
console.log(age < 18 && age < 25);

// Conditional ternery Operator 
// ? 

console.log(age>18?"adult":"teenage")

// Chaining Operator (?.)
// if property not exist in the object it shows null or undefine isted of throwing erro ;

const person = { name:"dhiraj","age":22,}
console.log(person?.city);