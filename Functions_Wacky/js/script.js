/*
Harrison Aguiar
WPF 1408 Section 01
Functions Wacky
8-27-14
*/

//Find out area of a triangle added to area of a trapezoid

(function() {//function to welcome user
    alert("Welcome to What's Up Studio");
}());

var name = prompt("Please type in your name.")//ask user name

while(name===""){//validation
	name=prompt("Don't leave this blank, it's required!\nPlease type in your name!")
}

console.log(name);//print out result


/*-------------------------------------------------------*/

var base = prompt("What is the base of your triangle?")//ask the size of triangle's base

console.log(base+ " inches") //print out result

var height = prompt("What is the height of your triangle?")//ask the size of triangle's height

console.log(height+ " inches")//print out result


var total = calcArea(base, height);//variable to calculate the triangle area

function calcArea(b, h){//defining
	var area = (b * h)/2;//function calculation
	return area; //function spitting the info out
}
console.log("The total area for the triangle is " +total+ " square inches.");//print out result


/*-------------------------------------------------------*/

var smallSide = prompt("What is the smaller size of your trapezoid?")//ask the size of trapezoid's smaller size

console.log(smallSide+ " inches")//print out result

var biggerSide = prompt("What is the bigger size of your trapezoid?")//ask the size of trapezoid's bigger size

console.log(biggerSide+ " inches")//print out result

var heightSide = prompt("What is the height of your trapezoid?")//ask the size of trapezoid's height size

console.log(heightSide+ " inches")//print out result


var trapezoidTotal = calcArea(smallSide, biggerSide, heightSide);//variable to calculate the total area for the trapezoid

function calcTArea(s, b, hs){//defining
	var tArea = ((s + b)/2) * hs;//function calculation
	return tArea; //function spitting the info out
}
console.log("The total area for the trapezoid is " +trapezoidTotal+ "square inches");//print out result

/*-------------------------------------------------------*/

var twoTotal = calcTotalArea(total, trapezoidTotal);//variable to calculate the total area for both pictures added together

function calcTotalArea(t, tt){//defining
	var totalArea = t + tt;//function calculation
	return totalArea; //function spitting the info out
}
console.log("The total area for both pictures added together are equal to " +twoTotal+ " square inches.");//print out result

