# 1. Immutable strings
==> ones string is created then when we apply or perform optetions on this string it return every time a new string : like split(),concat(),replace().....uppercase,lowercase.....etc

# 2. Template Literals ${}
==>Template literals allow to write multi-line strings without using escape characters (\n).
==> this is basically allows user to write expressions inside the string using backticks:
eg: let name = "dhiraj";
    console.log(`hello how are you ${name}`)

# 3. String Comparision (letter by letter) ........ special power 🤩
eg: console.log("apple" > "pineapple").......output : false
    console.log("pineapple" < "apple").......output : true

# 4.METHODS
  split() 
  ==> use for spliting the string charecter or words 
      ==> if we use "," between the  split(",") then it split the given string as considering the word and put inside the array.
      ==> if we didn't use the "," inside the splite("") the it conver string between charecters and separate them by , and put in array.
  
  toUpperCase() ==> convert strings from lowercase to uppercase
  toLowerCase() ==> convert strings from uppercase to lowercase
  join() ==> join the string 
  trim() ==> remove whitespases from strings ends only 
  substring() ==> We can extract a portion of a string using the substring() method.
  indexOf() ==> Find the first index of a substring within a string using indexOf() method.
  padStart() ==> add padding to starting of the string
  padEnd() ==> add padding to end the string 
  includes() ==> string contains the substring or not : output in true and false
  starstWith() ==> is string started with given substrign or not : output return in :  true : false
  endsWith() ==> is string ending with given substrign or not : output return in :  true : false
  replace() ==> replace the word or anything in string
  eg: let s1 = 'Learn HTML at GfG and HTML is useful';
      let s2 = s1.replace(/HTML/g, 'JavaScript');
      console.log(s2);
      output:Learn JavaScript at GfG and JavaScript is useful


# Passing JavaScript String as Objects
We can create a JavaScript string using the new keyword.
const str = new String("welcome user");
console.log(str);
output:[String: 'welcome user']