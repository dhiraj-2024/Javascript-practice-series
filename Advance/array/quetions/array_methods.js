const animal = ["dog","cat","cow","tiger","elephant"];
const birds = ["sparrow","parrot","crow","egale"]
const trees = ["mango","neem","babul"]
const numbers = [[1,2],[3,4],[5,6],[7,8]]
const num = [1,2,3,4,5,6,7,8,9]

console.log("array in string form: ",animal.toString());
console.log("push element 'ox' :  ",animal.push("ox"));
console.log(animal);
console.log("pop element : ",animal.pop());
console.log("array lenght is : ",animal.length);
console.log("element at index 2 'at': ",animal.at(2));
console.log("shift element from array starting: ",animal.shift());
console.log("unshift element at array starting: ",animal.unshift("buffelo"));
console.log("seprate element using join : ",animal.join("-"));
console.log("seprate element using join : ",animal.join("*"));

// concat to arrays 
console.log("concat animal and birds array : ", animal.concat(birds));
console.log("concat animal,trees and birds array : ", animal.concat(birds,trees));

console.log("print numbers array:",numbers)
console.log("print numbers array usin flat:",numbers.flat())
console.log("print num using flat map",num.flatMap((x)=>{
   return  x = [x,x*10];
}))

 
// splice and slice method 

console.log("add new elemnts in array using splice : ", animal.splice(2,0,"jiraf","zebra","donkey"))
console.log("remove elements usin slice : ", animal.slice(3))
console.log("orignal array element :",animal);
