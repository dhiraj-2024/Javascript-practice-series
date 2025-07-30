/*
- The JavaScript Math object allows you to perform mathematical tasks.
- The Math object is static.
*/

// some math constant properties : 

/*

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

*/

// Math Methods:

/*
Name	    Description
abs(x)	    Returns the absolute value of x
acos(x)	    Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	    Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	    Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	    Returns the cubic root of x
ceil(x)	    Returns x, rounded upwards to the nearest integer
clz32(x)	Returns the number of leading zeros in a 32-bit binary representation of x
cos(x)	    Returns the cosine of x (x is in radians)
cosh(x)	    Returns the hyperbolic cosine of x
E	        Returns Euler's number (approx. 2.718)
exp(x)	    Returns the value of Ex
expm1(x)	Returns the value of Ex minus 1
f16round(x)	Returns x, rounded downwards to the nearest integer
floor(x)	Returns x, rounded downwards to the nearest integer
fround(x)	Returns the nearest (32-bit single precision) float representation of a number
LN2	        Returns the natural logarithm of 2 (approx. 0.693)
LN10	    Returns the natural logarithm of 10 (approx. 2.302)
log(x)	    Returns the natural logarithmof x
log10(x)	Returns the base-10 logarithm of x
LOG10E	    Returns the base-10 logarithm of E (approx. 0.434)
log1p(x)	Returns the natural logarithm of 1 + x
log2(x)	    Returns the base-2 logarithm of x
LOG2E	    Returns the base-2 logarithm of E (approx. 1.442)
max(x1,x2,..)	Returns the number with the highest value
min(x1,x2,..)	Returns the number with the lowest value
PI	        Returns PI (approx. 3.14)
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sign(x)	    Returns the sign of a number (checks whether it is positive, negative or zero)
sin(x)	    Returns the sine of x (x is in radians)
sinh(x)	    Returns the hyperbolic sine of x
sqrt(x)	    Returns the square root of x
SQRT1_2	    Returns the square root of 1/2 (approx. 0.707)
SQRT2	    Returns the square root of 2 (approx. 1.414)
tan(x)	    Returns the tangent of an angle
tanh(x)	    Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number (x)


*/

// Mostly used Methods 

// Math.random()  
// - used to gnerate new quique number each time 

const RandomNumber = Math.random()
// console.log(RandomNumber); // it will return new numbre each and every time 

// Math.floor()

console.log(Math.floor(4.6)) // 4

// Math.ceil()

console.log(Math.ceil(4.6)); // 5

// Math.round()

console.log(Math.round(8.7)); // 9
console.log(Math.round(8.4)); // 8
console.log(Math.round(8.5)); // 9

// Math.trunc()

console.log(Math.trunc(5.8777)); // 5
console.log(Math.trunc(-5.8777));  // -5


// Math.sign()

console.log("Positeve number :",Math.sign(4));
console.log("Negative number :",Math.sign(-4));
console.log("Number is zero : ",Math.sign(0));


// Math.pow()

console.log("Square of 4 is : ",Math.pow(4,2))

// Math.abs()

console.log(Math.abs(-45.348)); // 45.348

// Math.min()

console.log(Math.min(22,45,67,88,3,67));

// Math.max()

console.log(Math.max(22,45,67,88,3,67));