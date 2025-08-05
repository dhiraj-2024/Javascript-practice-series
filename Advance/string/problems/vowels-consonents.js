// Count vowels and consonants in a string

// Method 1:

let checkVowelsAndConsonents =(str)=>{
    let lowerString = str.toLowerCase();
    let vCount = 0;
    let cCount = 0;
    const vowels = "aeiou";
    for(let char of lowerString){
      if(/[a-z]/.test(char)){
        if(vowels.includes(char)){
            vCount++;
        }else{
            cCount++;
        }
      }
    }
  console.log(`Vowels are : ${vCount} and Consonents are: ${cCount}`)
}

console.log(checkVowelsAndConsonents("dhirajiii"))


// Method 2:

const checkVandC =(str)=>{
    const vowels = new Set(['a','e','i','o','u']);
    let vowelC = 0;
    let consonentC = 0;
    [...str.toLowerCase()].forEach((char)=>{
        if(/[a-z]/.test(char)){
            vowels.has(char) ? vowelC++ : consonentC++;
        }
    });
    console.log(`vowels are: ${vowelC} and consonents are: ${consonentC}`)
}

checkVandC("hello")
