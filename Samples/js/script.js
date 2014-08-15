var givenNames = new Array();
    var pattern = /[\w\d]{1,}/ig;


    for(var i=0;i<10;i++){
var name = prompt("Enter some names. Only letters and digits are accepted!\nEntering an empty field stops asking","");
    if(name && name.match(pattern)){givenNames.push(name);}
    }

    function displayNames(){
        if(givenNames.length > 0){
            document.getElementById("list").innerHTML = "<span style='color:Navy;font-    weight:bold;'>Given names are:<\/span><br><br>" + givenNames.join("<br><br>");
        } else {
            document.getElementById("list").innerHTML = "<span style='color:Navy;font-weight:bold;'>Nothing has been given!<\/span>";
        }
    }


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