/*
Q1.
take full name from user , create the username for the user username should start from @ and contain 
the full name of user and  at the last it return the lenght of fullname
*/

let promt = prompt("Enter your full name ");
let trimName = promt.trim()
let lengthOfName = promt.length
const username = `@${trimName}${lengthOfName}`
console.log(username)