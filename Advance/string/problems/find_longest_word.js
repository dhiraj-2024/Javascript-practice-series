// Q1. Find length of longest word from the given string:

const { startTransition } = require("react");

const checkLongestWord =(str)=>{
    let a = str.split(" ");
    let maxlength = 0;
    let longestWord = "";
    for(let words of a){
        if(words.length > maxlength){
            maxlength = words.length
        }
    }
    return maxlength;
}
console.log(checkLongestWord("hello this is dhiraj how can i help you friends")); // 7



// Q2. Find longest word from the string and return it :

const checkLongestWords =(str)=>{
    let words = str.split(" ");
    let longWord = "";
    
    for(let word of words){
        if(word.length > longWord.length){
            longWord = word;
        }
    }
    return longWord;
}

console.log(checkLongestWords("Convert string to array of words")); // Convert



// using reduce method

const clw =(str)=>{
    return str
    .split("")
    .reduce((longest,current)=> current.length > longest.length ? current : longest)
}