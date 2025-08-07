// Capitalize the first letter of each word

const capiFirstLetter = (str)=>{
     let string = str.split("");
     let result = [];
     for (let words of string){
        const capitalized = words.charAt(0).toUpperCase() + words.slice(1);
        result.push[capitalized]
     }
    let result.join("")
}

console.log(capiFirstLetter("hello how are you"))