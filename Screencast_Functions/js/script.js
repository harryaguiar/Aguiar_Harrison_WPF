/*
Harrison Aguiar
WPF 1408 Section 01
Screencast: Functions
8-25-14
*/


/*------------Basic Function Structure -----*/
/*-------------------------
function functionName(){
	//conde the function runs
}
-----------------*/



/*-------------FunctionInvocation---------------------------*/
function outptMsg(){
	console.log("Hello World");
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}

calcArea();
calcArea();
calcArea();
/*---------------------VariableScope-------------------*/

/*-------------------------------
var width = 5; -----------*/
function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}

calcArea();
/*-- console.log(width); --*/

/*-------------------------

funcName (argument1, argument2);

function funcName(parameter1, parameter2){
	//code the function runs
}

-----------------*/


/*----------------Arguments and Parameters----------------*/
function dogYears(age){ //parameters
	var dogYears = age * 7;
	console.log("Spark is " +dogYears+ " years old.")
}
var age1 = 4;
dogYears(age1); //arguments
dogYears(5);

/*----------------Returning Values--------------------------*/

var total = calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	return area; //function spitting the info out
}
console.log(total);

/*----------------Function vs Procedure--------------------------*/

//this is a function
function calcAreaF(width, height){
	var area = width * height;
	return area;
}

//this is a procedure
function calcAreaP(width, height){
	var area = width * height;
	console.log(area); //no return
}














