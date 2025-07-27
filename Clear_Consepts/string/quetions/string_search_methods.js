let text = "Please locate where 'locate' occurs plain Please!";





let indexof = text.indexOf("locate"); 
let lastIndex = text.lastIndexOf("locate");
let search = text.search("locate")
let match = text.match("ain");
let mall = text.matchAll(/Please/g)
let check = text.includes("locate")
let sw = text.startsWith("Please")
let sw1 = text.startsWith("locate")

// similerly endsWith 

console.log("index of word locate is : ",indexof)
console.log("last index of word locate is : ",lastIndex)
console.log(search)
// console.log(match)
console.log(mall)
console.log(check)
console.log(sw)
console.log(sw1)