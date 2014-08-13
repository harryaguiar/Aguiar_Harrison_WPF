//Harrison Aguiar, 8/13/14, Expression Workshhet

//Example
//Calculate the Circumference of a Circle
var radius = 6;
const PI = 3.14159265;

//multiply 2, PI and the radius & assign to circ variable.
var circ = radius * 2 * PI;
//print out the output circumference
console.log("The circumference of the circle is " + circ );

//---------------//

//Dog Years
//Calculate how old Sparky the pit bull is in dog years based on his actual age
var human = 5 //human years variable

//multiply 7 to human variable
var dog = human * 7

//print out the output dog years
console.log("Sparky is " + human + " human years old which is " + dog + " in dog years.");

//---------------//

//Slice of Pie part 1
//Calculate how much pizza each partygoer will get at the party
var pizza = 20  //pizzas ordered variable
var people = 50   //partygoer variable
var slice = 8    //pizza slices variable

//multiply the number of pizzas by number of slices of each pizza, then divide by the number of people
var ate = (20*8)/50  //slices every person ate variable

//print out the output slices for each person
console.log("Each person ate " + ate + " slices of pizza at the party.")

//---------------//

//---------------//

//Slice of Pie part 2
//Calculate how much pizza each partygoer will get at the party
var pizza = 20  //pizzas ordered variable
var people = 50   //partygoer variable
var slice = 8    //pizza slices variable

//multiply the number of pizzas by number of slices of each pizza, then calculate the remainder(%) slices from the number of person
var remainder = (20*8) % 50  //slices remainder for Sparky variable 

//print out the output slices Sparky got
console.log("Sparky got " + remainder + " slices of pizza.")

//---------------//

//Average shopping bill
//Calculate the average amount spent on groceries over the past five weeks
var grocery = [120, 215, 118, 121, 212]  //amount spent on grocery variable

//Add up the amount spent on each week
var spent = grocery[0] + grocery[1] + grocery[2] + grocery[3] + grocery[4]  //total amount spent on groceries variable

//Divide the total amount spent by the number of weeks (5)
var average = spent/5 //average spent on groceries for the past 5 weeks variable

//print out the output for the total and the average spent on groceries for the past 5 weeks
console.log("You have spent a total of $" + spent + " on groceries over 5 weeks. That is an average of $" + average + " per week")

//---------------//

//Discounts
//Calculate the discounted price with and without sales tax
var originalPrice = 499.99  //original price variable
var discount = 15 //discount percentage variable
var item = "3d Printer" //description item variable
var tax = 8.875 //sales tax percentage variable

//As it is a discount, subtract from the total. To find out the discount in percentage, divide it by 100 then multiply by the original price in negative to make it a subtraction. After finding out the discount the discount amount, subtract from the original price to have the total price after the discount
var totalNoTax = -originalPrice * (discount / 100) + originalPrice  //price of item with tax variable

//Take the total result from the discounted price and add up the tax by findind the percentage value which is, take the tax value, divide by 100, then multiply by the discounted result price. Then with the percentage value just add it up to the total discounted price.
var totalTax =  totalNoTax * (tax/100) + totalNoTax //price of item without tax variable

//print out the output for the item choosen with the original price, discont given, total with tax, and total without tax 
console.log("Your " + item + " was originally $" + originalPrice + ", but after a " + discount + "% discount, it is now $" + totalNoTax + " without tax, and $" + totalTax + " with tax.")


