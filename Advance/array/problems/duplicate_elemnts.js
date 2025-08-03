// Q1. Find duplicate elements from array 
 
// type 1:
const num = [1,2,3,4,2,5,1,3,7,8,4,9,1,1,1,3,2];

const dupElement = num.filter((item,index)=> num.indexOf(item) !== index)
console.log(dupElement) // print all duplicate elements :[2, 1, 3, 4, 1,1, 1, 3, 2]
console.log(...new Set(dupElement));// it prints only one time the duplicate items in array : 2,1,3,4


// type 2: 
let da = [];

const di = num.filter((item,index)=>{
    if(num.indexOf(item) !== index){
       da.push(item)
    } 
})
console.log("da:",da); // print all duplicate elements :[2, 1, 3, 4, 1,1, 1, 3, 2]
console.log("da:", ...new Set(da)); // it prints only one time the duplicate items in array : 2,1,3,4






//Q2. Count how many times each element appears in the array 

const frequency = {};

for(let item of num){
    if(frequency[item]){
        frequency[item]++;
    }
    else{
        frequency[item] = 1;
    }
}

console.log(frequency); // { '1': 5, '2': 3, '3': 3, '4': 2, '5': 1, '7': 1, '8': 1, '9': 1 }







//Q3. Get only duplicates from the array

const duplicates = [];

for(let key in frequency){
    if(frequency[key] > 1){
        duplicates.push(Number(key))
    }
}

console.log(duplicates); // [ 1, 2, 3, 4 ]






// Q4. Remove duplicate items form the array 

const sortedArray = [];

for(let key in frequency){
    if(frequency[key] == 1){
        sortedArray.push(Number(key))
    }
}
console.log("unique numbers :",sortedArray) // [ 5, 7, 8, 9 ]


