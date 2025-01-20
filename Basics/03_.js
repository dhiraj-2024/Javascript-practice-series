//  Calculate Area of Triangle (Sides: 5, 6, 7)
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

const areaOfTrangle = function (a, b, c) {
    let area;
    let s;
    s = (a + b + c) / 2;
    area = Math.sqrt((s * (s - a) * (s - b) * (s - c)));
    return area;

}

console.log(`area of trangle is : ${areaOfTrangle(5, 6, 7)}`);


//Calculate area of square
const areaOfSquare = function(side){
    let squareArea =(side)*(side)
    return squareArea;
}


console.log(`Area of square is : ${areaOfSquare(2)}`)

// Calculate area of Rectangel 

const areaOfRectangel = function (l,b){
    const rectangelArea = l*b;
    return rectangelArea;
}

console.log(`Area of rectangel is : ${areaOfRectangel(34,22)}`)


// Calculate area of circle 

const areaOfCircle = function(r){
    const pi= 3.14;
    const circleArea= (pi*(r*r));
    return circleArea;
}

console.log(`area of circle is : ${areaOfCircle(5)}`)