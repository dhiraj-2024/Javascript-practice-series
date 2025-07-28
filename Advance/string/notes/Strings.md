# 1. Immutable strings
==> ones string is created then when we apply or perform optetions on this string it return every time a new string : like split(),concat(),replace().....uppercase,lowercase.....etc

# 2. Template Literals ${}
==>Template literals allow to write multi-line strings without using escape characters (\n).
==> this is basically allows user to write expressions inside the string using backticks:
eg: let name = "dhiraj";
    console.log(`hello how are you ${name}`)
    
# 2.1 Escape charecter
### when we try to calculate string lenght with escape charectr it consider \* it one not two
- \b	Backspace
- \f	Form Feed
- \n	New Line
- \r	Carriage Return
- \t	Horizontal Tabulator
- \v	Vertical Tabulator

# 3. String Comparision (letter by letter) ........ special power 🤩
eg: console.log("apple" > "pineapple").......output : false
    console.log("pineapple" < "apple").......output : true

# 4.METHODS
at()	Returns an indexed character from a string
charAt()	Returns the character at a specified index (position)
charCodeAt()	Returns the Unicode of the character at a specified index
codePointAt()	Returns the Unicode value at an index (position) in a string
concat()	Returns two or more joined strings
constructor	Returns the string's constructor function
endsWith()	Returns if a string ends with a specified value
fromCharCode()	Returns Unicode values as characters
includes()	Returns if a string contains a specified value
indexOf()	Returns the index (position) of the first occurrence of a value in a string
isWellFormed()	Returns true if a string is well formed
lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
length	Returns the length of a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a value, or a regular expression, and returns the matches
matchAll()	Searches a string for a value, or a regular expression, and returns the matches
padEnd()	Pads a string at the end
padStart()	Pads a string from the start
prototype	Allows you to add properties and methods to an object
repeat()	Returns a new string with a number of copies of a string
replace()	Searches a string for a pattern, and returns a string where the first match is replaced
replaceAll()	Searches a string for a pattern and returns a new string where all matches are replaced
search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Deprecated. Use substring() or slice() instead.
substring()	Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	Returns a string converted to lowercase letters
toString()	Returns a string or a string object as a string
toUpperCase()	Returns a string converted to uppercase letters
toWellFormed()	Returns a string where "lone surrogates" are replaced with the Unicode replacement character
trim()	Returns a string with removed whitespaces
trimEnd()	Returns a string with removed whitespaces from the end
trimStart()	Returns a string with removed whitespaces from the start
valueOf()	Returns the primitive value of a string or a string object


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
