/*
Harrison Aguiar
WPF 1408 Section 01
Function Workshhet
8-26-14
*/

//Problem: Calculate the area of a rectangle given the width and height of the rectangle.
//Calculate the Area of a Rectangle
var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log("The Area of the Rectangle is " + area);

function calculateArea(w, h )
{
     return w *h;
}

/*-------------------------------------------------------*/

//Circumference

//Calculate the circumference of a circle.



var radius = 5;//Radius of the circle
var cicleCircumference = calculateCircumference(radius);//invoking
console.log("The circumference of the circle is " +cicleCircumference);//print out result to the console

function calculateCircumference(r){//defining
	return 2 * Math.PI * r;//return
}


/*-------------------------------------------------------*/

//Stung!
//Calculate how many bee stings are needed to kill an animal in a function



var victimWeight = 153; //Victim’s weight in pounds
var beeStings = 8.666666667; //bee stings per pound to kill an animal
var totalBeeStings = calculateBeeStings(victimWeight, beeStings)//invoking
console.log("It takes " +totalBeeStings+ " bee stings to kill this animal.")//print out result to the console

function calculateBeeStings(v, b){//defining
	return v * b;//return
}


