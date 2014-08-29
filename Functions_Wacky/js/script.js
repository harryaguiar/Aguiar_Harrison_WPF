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

console.log(name);//print out result


/*-------------------------------------------------------*/

var base = prompt("What is the base of your triangle?")

console.log(base+ " inches") //print out result

var height = prompt("What is the height of your triangle?")

console.log(height+ " inches")//print out result


var total = calcArea(base, height);

function calcArea(b, h){//defining
	var area = (b * h)/2;
	return area; //function spitting the info out
}
console.log("The total area for the triangle is " +total+ " square inches.");//print out result


/*-------------------------------------------------------*/

var smallSide = prompt("What is the smaller size of your trapezoid?")

console.log(smallSide+ " inches")//print out result

var biggerSide = prompt("What is the bigger size of your trapezoid?")

console.log(biggerSide+ " inches")//print out result

var heightSide = prompt("What is the height of your trapezoid?")

console.log(heightSide+ " inches")//print out result


var trapezoidTotal = calcArea(smallSide, biggerSide, heightSide);

function calcTArea(s, b, hs){//defining
	var tArea = ((s + b)/2) * hs;
	return tArea; //function spitting the info out
}
console.log("The total area for the trapezoid is " +trapezoidTotal+ "square inches");//print out result

/*-------------------------------------------------------*/

var twoTotal = calcTotalArea(total, trapezoidTotal);

function calcTotalArea(t, tt){//defining
	var totalArea = t + tt;
	return totalArea; //function spitting the info out
}
console.log("The total area for both pictures added together are equal to " +twoTotal+ " square inches.");//print out result



