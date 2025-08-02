// Reverse any string :



// using for loop :

let result = "";
function reverseString (str){
       for (let i=str.length - 1; i>=0; i--)
       {
         result += str[i];
       }
       return result;
}
let greet = "good morning"
console.log(reverseString("Dhiraj")); //jarihD
console.log(reverseString(greet)); //jarihDgninrom doog






// using string methods

let newStr = "Hello World";
// type 1:
let splitStr = newStr.split("")
console.log(splitStr.reverse().join("")); //dlroW olleH

// type 2: we can do this in single line also 
console.log(newStr.split("").reverse().join("")); //dlroW olleH




// using the sprade and reduce()
// type 1:
let text = "VeryHappy";
const rString = (str) => [...str].reduce((rev,char)=>{
  return char += rev;
},"")

console.log(rString(text))
// console.log([...text])


// type 2:
function reverseString(str) {
  const chars = [...str]; // step 1: convert to array
  const reversed = chars.reduce(function(rev, char) {
    return char + rev;
  }, ""); // step 2: reduce from left to right
  return reversed; // step 3: return final result
}

console.log(reverseString("JavaScript"));
// Output: "tpircSavaJ"


/*
for better understanding

'J' + ""          => "J"
'a' + "J"         => "aJ"
'v' + "aJ"        => "vaJ"
'a' + "vaJ"       => "avaJ"
'S' + "avaJ"      => "SavaJ"
'c' + "SavaJ"     => "cSavaJ"
'r' + "cSavaJ"    => "rcSavaJ"
'i' + "rcSavaJ"   => "ircSavaJ"
'p' + "ircSavaJ"  => "pircSavaJ"
't' + "pircSavaJ" => "tpircSavaJ"

*/