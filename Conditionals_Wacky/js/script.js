/*
Harrison Aguiar
WPF 1408 Section 01
Conditionals Wacky
8-21-14
*/

// Soccer table

//Determine how many points will a soccer team have after a game result 



//Given
var victory = 3; 
var drawn = 1;
var lost = 0;


//essential
var team = prompt("What is your team?");

if (team === "") {
	team = prompt("Please enter your team name!");
};

var gameResult = prompt("Did your team had a win, drawn or a lost on the last game?");

if (gameResult === "") {
	gameResult = prompt("Please answer if your team had a win, drawn or a lost!");
};

if (gameResult === "win"){
	console.log("Your team " +team+ " won " +victory+ " points from the last game.");
	alert("Your team " +team+ " won " +victory+ " points from the last game.");
}else if (gameResult === "drawn") {
	console.log("Your team " +team+ " won " +drawn+ " points from the last game.");
	alert("Your team " +team+ " won " +drawn+ " points from the last game.");
}else if (gameResult === "lost") {
	console.log("Your team " +team+ " won " +lost+ " points from the last game.");
	alert("Your team " +team+ " won " +lost+ " points from the last game.");
};

var pointsBefore = prompt("How many points did your team have before this game?")

if (pointsBefore === "") {
	pointsBefore = prompt("Please answer how many points your team had before this game!");
};

if (gameResult === "win"){
	var totalPoints = victory + parseInt("pointsBefore")
	console.log(+team+ " has now " +totalPoints+ " on the league.");
	alert(+team+ " has now " +totalPoints+ " on the league.");
}else if (gameResult === "drawn") {
	var totalPoints = drawn + parseInt("pointsBefore")
	console.log(+team+ " has now " +totalPoints+ " on the league.");
	alert(+team+ " has now " +totalPoints+ " on the league.");
}else if (gameResult === "lost") {
	var totalPoints = lost + parseInt("pointsBefore")
	console.log(+team+ " has now " +totalPoints+ " on the league.");
	alert(+team+ " has now " +totalPoints+ " on the league.");
};


//result
console.log(" ")