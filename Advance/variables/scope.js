//Global Scope

/*
 - A variable declared outside any function or block
 - Accessible everywhere in your code
*/

var a = 10;
let b = 20;
const c = 30;

function show() {
  console.log(a); // ✅ 10
  console.log(b); // ✅ 20
  console.log(c); // ✅ 30
}
show();


// Function Scope (Only for var)
// - Variables declared with var inside a function are only accessible within that function.
function testVarScope() {
  var x = 5;
  console.log(x); // ✅ 5
}
testVarScope();
// console.log(x); ❌ ReferenceError. not allowed for var


// Block Scope (Only for let and const)
/*
 - A block is any code inside {} (like if, for, while, functions)
 - let and const are block scoped — only accessible inside that block
*/

{
  let name = "Dhiraj";
  const city = "Delhi";
  console.log(name); // ✅ Dhiraj
  console.log(city); // ✅ Delhi
}

//console.log(name);  //❌ ReferenceError
//console.log(city);  //❌ ReferenceError