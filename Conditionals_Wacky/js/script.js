/*
Harrison Aguiar
WPF 1408 Section 01
Conditionals Wacky
8-21-14
*/

// Soccer table

//Determine how many points will a soccer team have after a game result 



//Given
var victory = 3; //points given for a victory
var tie = 1; // points given for a tie
var lost = 0; // points given for a lost


//ask user what team does he chear for
var team = prompt("What is your team?");

if (team === "") {//validation
	team = prompt("Please enter your team name!");
};

//ask user if team won, tied or lost on the last game
var gameResult = prompt("Did your team had a win, tie or a lost on the last game?");
	console.log(gameResult)// print out result

if (gameResult === "") {//validation
	gameResult = prompt("Please answer if your team had a win, tie or a lost!");
};

if (gameResult === "win"){//if the answer is a win
	console.log("Your team " +team+ " won " +victory+ " points from the last game.");// print out result
	alert("Your team " +team+ " won " +victory+ " points from the last game.");// alert user the result
}else if (gameResult === "tie") {//if the answer is a tie
	console.log("Your team " +team+ " won " +tie+ " points from the last game.");// print out result
	alert("Your team " +team+ " won " +tie+ " points from the last game.");// alert user the result
}else if (gameResult === "lost") {//if the answer is a lost
	console.log("Your team " +team+ " won " +lost+ " points from the last game.");// print out result
	alert("Your team " +team+ " won " +lost+ " points from the last game.");// alert user the result
};

var pointsBefore = prompt("How many points did your team have before this game?")
	console.log(pointsBefore)// print out result

if (pointsBefore === "") {//validation
	pointsBefore = prompt("Please answer how many points your team had before this game!");
};

if (gameResult === "win"){//if team won add with points team had before the game
	var totalPoints = parseInt(victory) + parseInt(pointsBefore)//points given + points had before
	console.log(team+ " has now " +totalPoints+ " on the league.");// print out result
	alert(team+ " has now " +totalPoints+ " on the league.");// alert user the result
}else if (gameResult === "tie") {//if team tied add with points team had before the game
	var totalPoints = parseInt(tie) + parseInt(pointsBefore)//points given + points had before
	console.log(team+ " has now " +totalPoints+ " on the league.");// print out result
	alert(team+ " has now " +totalPoints+ " on the league.");// alert user the result
}else if (gameResult === "lost") {//if team lost add with points team had before the game
	var totalPoints = parseInt(lost) + parseInt(pointsBefore)//points given + points had before
	console.log(team+ " has now " +totalPoints+ " on the league.");// print out result
	alert(team+ " has now " +totalPoints+ " on the league.");// alert user the result
};
