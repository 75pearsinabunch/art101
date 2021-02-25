/**
* Author:    Alvaro Perez
* Created:   02.25.2021
*
* (c) Copyright by Alvaro Perez
**/
/*function FizzBuzz(num){
  for(var num=1; num <= 200; num++){
    console.log(num);
    if (num%3 == 0){
      console.log("Fizz!")
    }
    if (num%5 == 0){
      console.log("Buzz!")
    }
    if (num%7 == 0){
      console.log("Boom!")
    }
    if (num%3 == 0 && num%5 ==0){
      console.log("FizzBuzz!")
    }
    if (num%5 == 0 && num%7 ==0){
      console.log("BuzzBoom!")
    }
    if (num%3 == 0 && num%7 ==0){
      console.log("FizzBoom!")
    }
    if (num%3 == 0 && num%5 ==0&& num%7 ==0){
      console.log("FizzBuzzBoom!")
    }
  }
}
oneLongString =+ num + " Fizz!<br>";
$("#output").html(oneLongString);
str =+ "Fizz";
$("#output").append("<p>" + str + "</p>");
$("#output").append*/
number = 4;
outputEl = document.getElementById("output");
function getFactorObj() {
    var empty = {};
    for (var modNum=0; modNum<number; modNum++) {
        numId = "num" + modNum;
        textId = "text" + modNum;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(modNum + ") num:", numValue, "text:", textValue)
        if (numValue && textValue) {
            empty[numValue] = textValue;
        }
    }
    return empty;
}
function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}
function fizzBuzzBoom(maxNums, empty) {
    for (var num=0; num<maxNums; num++) {
        var outputStr = "";
        for (var modNum in empty) {
            if (num % modNum == 0) {
                outputStr += empty[modNum];
            }
        }
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}
document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    var empty = getFactorObj();
    outputEl.innerHTML = "";
    fizzBuzzBoom(max, empty);
    outputEl.classList.add("cols");
})
