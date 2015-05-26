/****** Copyright © 2015 www.thingsstockbrokerssay.com - All Rights Reserved 
/******Property of Gale Technologies LLC www.galetechnologiesllc.com*******/
var usedNumbers = []; 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(window).load(function () {
  makeid();
});

// function ContentCount() {
//      var xmlhttp = new XMLHttpRequest();
//      xmlhttp.onreadystatechange = function() {
//          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//              document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
//          }
//      }
// }

function makeid() {
    var numbersRepeated = 0;
    var getContentNumber = 0;

    while(true){
        numbersRepeated = 0;

        var str = getRandomInt(0,41);
        var i;
        for (i = 0; i < usedNumbers.length; i++) {
            if(usedNumbers[i] == str){
                numbersRepeated = numbersRepeated + 1;
            }
        }

        if (numbersRepeated == 0){
            usedNumbers.push(str);
            getContentNumber = str;
            break;
        }

    }

    if(usedNumbers.length > 41){
        usedNumbers = []
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
         document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
     }
    }

    xmlhttp.open("GET", "getContent.php?q=" + getContentNumber, true);
    xmlhttp.send();
}