/*
Harrison Aguiar
WPF 1408 Section 01
Functions Wacky
8-27-14
*/


var name = prompt("Please type in your name.")

while(name===""){
	name=prompt("Don't leave this blank, it's required!\nPlease type in your name!")
}

console.log(name);


/*-------------------------------------------------------*/

var base = prompt("What is the base of your triangle?")

console.log(base)

var height = prompt("What is the height of your triangle?")

console.log(height)


var total = calcArea(base, height);

function calcArea(b, h){
	var area = (b * h)/2;
	return area; //function spitting the info out
}
console.log(total);


/*-------------------------------------------------------*/

var smallSide = prompt("What is the smaller size of your trapezoid?")

console.log(smallSide)

var biggerSide = prompt("What is the bigger size of your trapezoid?")

console.log(biggerSide)

var heightSide = prompt("What is the height of your trapezoid?")

console.log(heightSide)


var trapezoidTotal = calcArea(smallSide, biggerSide, heightSide);

function calcTArea(s, b, hs){
	var tArea = ((s + b)/2) * hs;
	return tArea; //function spitting the info out
}
console.log(trapezoidTotal);

/*-------------------------------------------------------*/

var twoTotal = calcTotalArea(total, trapezoidTotal);

function calcTotalArea(t, tt){
	var totalArea = t + tt;
	return totalArea; //function spitting the info out
}
console.log(twoTotal);



