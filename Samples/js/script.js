var triangle = new Object();
triangle['sideA']   =   3;
triangle['sideB']   =   4;
triangle['sideC']   =   5;
triangle['getArea'] =   function ( a, b, c ) {
  // Return the area of a triangle using Heron's formula
        
  var semiperimeter   =   (a + b + c) / 2;
  var calculation     =   semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c);
  return Math.sqrt( calculation );
        
}; 

var experienceRate = prompt("Before I give you the total amount you made today, could you grade your work day (from 0 to 4) for us?\nNote: 0 - Really Bad to 4 - Really good")





console.log(experienceRate);


var experience = console.log(experienceRate);
var experience = ["Really Bad", "Bad", "Okay", "Good", "Really Good"]; //0,1,2,3,4

experience [0] = "Really Bad"
experience [2] = "Bad"
experience [3] = "Okay"
experience [4] = "Good"
experience [5] = "Really Good" //0,1,2,3,4

alert(experience);