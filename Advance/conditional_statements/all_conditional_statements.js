// if the person age is above 18 : the person should able to drive the car and
// if the age is below the 18 he is not able to drive the car
/*

let age = 17;

if(age>18){
    console.log("you can drive the car");
}
else{
    console.log("you can not drive the car");
}

*/
let time = 18;

if (time < 10) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting)


/*
- In a switch statement, if no case matches and there’s no default, 
the program simply skips the entire switch block and continues to the next statement after it.
- there is not fix to write default case at the last we can write it on the top or middle also at any position 
*/

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    console.log(text)
    break;
  case 0:
    text = "Today is Sunday";
    console.log(text)
}

console.log("Switch ended moving on")