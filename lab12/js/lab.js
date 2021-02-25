/**
* Author:    Alvaro Perez
* Created:   02.23.2021
*
* (c) Copyright by Alvaro Perez
**/
/*
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Hufflepuff"
  }
  else if (mod == 3) {
    return "Slytherin"
  }
}
var myButton = document. getElementById("button");
myButton.addEventListner("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p> The Sorting Hat has sorted you into "+house+"</p>";
  document.getElementById("output").innerHTML = newText;
})
*/
$("#button").click(function() {runSort()});
function runSort() {
  var name = $("#input").val();
  var yourHouse = sortingHat(name);
  var houseName = ["Gryffindor","Ravenclaw","Slytherin","Hufflepuff"];
  $("#output").html("The sorting hat has sorted you into " + houseName[yourHouse]);
}
function sortingHat(string) {
  var length = string.length;
  if (length == 0) {
    return 0;
  } else {
    var mod = ((length % 4)+1);
    return mod;
  }
}
