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
console.log(“The Area of the Rectangle is “ + area);

function calculateArea(w, h )
{
     return w *h;
}