/*
1. Display Current Day and Time

Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

const date = new Date();
const daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = date.getDay();
const currentday = daylist[day];
console.log(`Today is : ${currentday}.` ); // Today is : Sunday.


const hours = date.getHours();
// convert hours in 12 hours format 
hours == hours % 12 || 12; // when reminder is 0 then it will print 12
const min = date.getMinutes();
const sec = date.getSeconds();


const ampm = hours>=12 ? "PM" : "AM"

// this is for when min and sec are in single digit it will add 0 before the min or sec
const formattedMin = min < 10 ? `0${min}` : min;
const formattedSec = sec < 10 ? `0${sec}` : sec;

// Display the time
console.log(`Current Time is : ${hours} ${ampm} : ${formattedMin} : ${formattedSec}`); //Current Time is : 6 AM : 06 : 26