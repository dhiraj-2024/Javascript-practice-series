// forEach()
const num1 = [1,2,3,4,5,6,7,8,8,9,];
let printNumber = num1.forEach((value,index)=>{
    //   console.log(`${index}:${value}`)
})

//map()
const num2 = [10,33,54,67,46,87,99,33,57,62,91,50]
const printWithMapNum2 = num2.map((value,index)=>{
    // console.log(`${index} : ${value} `)
})

const num3 = [1,2,3,4,5,6,7,8,8,9,];
let doubleNum3 = num3.map((value,index)=>{
     return value * 2;
})

// console.log(doubleNum3)

// filter()
const num4 = [10,33,54,67,46,87,99,33,57,62,91,50]
let filterArray = num4.filter(sortFunction);

function sortFunction(value){
    return value > 40;
}
// console.log(filterArray)


//every()
const num5 = [10,33,54,67,46,87,99,33,57,62,91,50]
let checkEveryElement = num5.every(everyFunction);

function everyFunction(value){
    return value > 8;
}
// console.log(checkEveryElement); // true


// some()

const num6 = [10,33,54,67,46,87,99,33,57,62,91,50];
const checkNum = num6.some((value)=>{
    return value > 8;
})
// console.log(checkNum); // true


// Array.from()

str = "JFSKDJFKAJSDJF";
let strInArray = Array.from(str);
// console.log(strInArray)

const num8 = [1,2,3,4,5,6,7,8,9,];
let square = Array.from(num8,(v) => v*v )
// console.log(square);  // [ 1,  4,  9, 16, 25, 36, 49, 64, 81]



// Array.keys()

let printKeys = num8.keys();
for(let x of num8){
    // console.log(`${x}`)
}

// entries 

const fruits =["banana","pineapple","mango","grapes","gauva"];
let f = fruits.entries();

for (x of f){
x +=  ""
// console.log(x)
}



// with() use to add new element in array but not modify the orignal array 
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
// console.log(myMonths)
// console.log(months)


// (...) javascript array sprade operator : 

const a = [ 1,2,3,4];
const b = [ 5,6,7,8];

const aAndb = [...a , ...b]
console.log(aAndb);


const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);


// use to find min max number also 

const randomNumbers = [ 343,55,33,5,6,88,66,22,1,888,55,578,795,9765]
const max = Math.max(...randomNumbers);
const min = Math.min(...randomNumbers);

console.log("max no is : ",max)
console.log("min no is :",min)