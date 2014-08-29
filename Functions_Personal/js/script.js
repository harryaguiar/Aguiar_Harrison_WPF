/*
Harrison Aguiar
WPF 1408 Section 01
Functions Personal
8-27-14
*/


//Voting poll


var name = prompt("Please type in your name.")

while(name===""){
	name=prompt("Don't leave this blank, it's required!\nPlease type in your name!")
}

console.log(name);

/*-------------------------------------------------------*/

var speedingTicket = prompt("Did you get a speeding ticket?")

if (speedingTicket === "") {//validation
	speedingTicket = prompt("Please enter yes or no!");
}else if (speedingTicket === "yes") {//if user is interested on taking
	speedLimit = prompt("What was the speed limit posted?"); //if so, ask user how many classes he would take
}else{
	wrongPlace = alert("Thank you for your visit! We are here to help people who have got a speeding ticket!")
}


console.log(speedLimit);


/*-------------------------------------------------------*/

var speedDriven = prompt("How fast where you going?")
console.log(speedDriven);

while(speedDriven===""){
	speedDriven = prompt("Please type in how fast you were driving!")
}


console.log(speedDriven);

/*-------------------------------------------------------*/

var mileageCost = prompt("What is the cost for every mile you go over the limit in your county?")
while(mileageCost===""){
	mileageCost = prompt("Please type in how fast you were driving!")
}

console.log(mileageCost);
/*-------------------------------------------------------*/

var ticketPrice = calcTicket(speedLimit, speedDriven, mileageCost);

function calcTicket(L, D, C){
	var ticket = (D - L) * C;
	return ticket; //function spitting the info out
}
console.log(ticketPrice);


