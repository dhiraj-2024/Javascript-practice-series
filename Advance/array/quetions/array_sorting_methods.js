const animal = ["dog","cat","cow","tiger","elephant"];
const birds = ["sparrow","parrot","crow","egale"]
const trees = ["mango","neem","babul"]
const numbers = [21,453,88,46,73,9,20,1,60,59,298]


console.log("reverse array element before sorting : ",animal.reverse())
console.log("sort animals alphabatically : ",animal.sort())
console.log("reverse array element after sorting : ",animal.reverse())

// toReversed() ES2023  it is safe way to reverse array without alternating orignal array
console.log("reverse birds array element : ",birds.toReversed())
// toSorted() ES2023  it is safe way to sort array without alternating orignal array
console.log("sort the bird array alphabatically:",birds.toSorted())

// we can not use sort for numbers because it consider numbers as a string and produce incorrect result :
console.log("sort numbers by ascending order : ",numbers.sort()) // Output: [1, 20, 21, 298, 453,46, 59, 60, 73, 88,9 ]

// for sorting number we use the compare function : (a,b) => a-b;
console.log("sort numbers using compare function with sore",numbers.sort((a,b) => a-b))


/*
NUMERIC SORT  : 
for sorting numbers we use compare function : 
for ascending order we use (a,b)=> a-b;
for descending order we use (a,b)=> b-a;

RANDOM SORT :
for random sort we use function ()=> 0.5 - Math.Random();


MIN MAX 
function(array){
return Math.min.apply(null,array)
};

function(array){
return Math.max.apply(null,array)
}

*/