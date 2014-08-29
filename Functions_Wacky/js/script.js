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



var total = calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	return area; //function spitting the info out
}
console.log(total);
