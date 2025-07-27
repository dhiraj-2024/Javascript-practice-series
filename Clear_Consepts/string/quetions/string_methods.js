//***************** 
// 1. TEMPLATE LITERALS ${}
let s1 = "dhiraj";
let s2 = ` hello ${s1}`;
// console.log(s2)

//****************** */
// 2. STRING COMPARISION
// console.log("apple">"pineapple")
// console.log("pineapple">"apple")

//****************** */
// 3. METHODS 
// split()

let names = "hello how can i help you?";
let text = "dhiraj"
let text1 = "      Hello World!      "
let text2 = "Hello World \uD800";
let splitName = names.split("")
let splitName2 = names.split(" ' ")
let countLength = names.length;
let char = names.charAt(0);
let char1 = names.charCodeAt(2);
let letter = text.at(4);
let index = text[4]
let text3 = names.concat(" ",text);
let slice = names.slice(4) //o how can i help you?
// let slice = names.slice(4,13) //o how can
// let slice = names.slice(-10,-1) // help you
let substring = names.substring(8) // NOTE: similer to slice but difference is it concider any - value from zero : 
let wellformed = text2.isWellFormed() // false
let wellformed2 = names.isWellFormed()  // true
let towell = text2.toWellFormed();
let trim = text1.trim();

/*
remaining string methods : 
padStart()
padEnd()
replace()
replaceAll()
split()
*/

console.log("split the string each letter:",splitName)
console.log("split the string with , : ",splitName2)
console.log("join the string again : ",splitName2.join())
console.log("lenght of string is : " ,countLength)
console.log("char at 0 position : ", char)
console.log("charCodeAt: ", char1)
console.log("letter position", letter);
console.log("leter index : ", index);
console.log("concated string: " ,text3)
console.log("slice:",slice);
console.log("substring: ", substring)
console.log("wellformed :",wellformed2)
console.log("convert it well formed :",towell)
console.log("trim the string: ",trim)
console.log(text1.length) //24
console.log(trim.length) //12
