// Dates Methods 
/*

  Method	            Description

getFullYear()	Get year as a four digit number (yyyy)
getMonth()	    Get month as a number (0-11)
getDate()	    Get day as a number (1-31)
getDay()	    Get weekday as a number (0-6)
getHours()	    Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	    Get time (milliseconds since January 1, 1970)

*/

const date = new Date()

console.log("Full Year :",date.getFullYear())
console.log("Current Day Date :",date.getDate())
console.log("Current Month :",date.getMonth())
console.log("Hours :",date.getHours())
// getMinutes();
// getSeconds();
// getMilliseconds();
console.log("Week Day :",date.getDay())
console.log("Date in string :",date.toString())
console.log("Short Date :",date.toLocaleDateString())
console.log("Iso Date :",date.toISOString())
console.log("UTC Date :",date.getUTCDate())


// these are some date set methods : 

/*

  Method	           Description

setDate()	    Set the day as a number (1-31)
setFullYear()	Set the year (yyyy)
setHours()	    Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	    Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	    Set the time (milliseconds since January 1, 1970)
*/