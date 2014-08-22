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

if (name === "") {
	team = prompt("Please enter your team name!");
};

var gameResult = prompt("Did your team win, draw or lost the last game?");

if (gameResult === "win"){
	console.log("Your team " +team+ " won " +victory+ "points from the last game.");
}else if (gameResult === "draw") {
	console.log("Your team " +team+ " won " +drawn+ "points from the last game.");
}else if (gameResult === "lost") {
	console.log("Your team " +team+ " won " +lost+ "points from the last game.");
}else{

}


//result
console.log(" ")