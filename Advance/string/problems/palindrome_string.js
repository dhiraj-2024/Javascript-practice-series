// Q1. check the string is palindrome or not : "madam" = "madam"

function checkReverseString(str){
    let reverseStr = str.split('').reverse().join("")
    if(str == reverseStr){
        console.log(`The given string ${str} is palindrome`)
    }else{
        console.log(`The given string ${str} is not a palindrom`)
    }
}
checkReverseString("madam"); //The given string madam is palindrome
checkReverseString("hello"); //The given string hello is not a palindrom










// Method 2: same quetion but solve using for loop

const checkStrIsPalindrom = (str)=> {
     for(i = 0; i < str.length/2; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false
        }
     }
     return true;
}
console.log(checkStrIsPalindrom("racecar")); //true











// Method 3: using array reduce()

const checkStrPa = (str)=>{
    let rev = [...str].reduce((rev,char)=> char+rev ,"")
     return str === rev;
}

console.log(checkStrPa("12344321")); // true












// Method 4: using array every()

const isStringPalindrom = (str)=>{
     return str.split('').every((val,i)=> val === str[str.length - 1 - i])

}
console.log(isStringPalindrom("madam"))