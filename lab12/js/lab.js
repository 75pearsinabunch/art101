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
function getHouse(num){
  var remainder = nume % 4;
  if (remainder == 0){
    var str = "Gryffindor";
  }else if (remainder == 1){
    var str = "Ravenclaw";
  }else if (remainder == 2){
    var str = "Hufflepuff";
  }else if (remainder == 3){
    var str = "Slytherin";
  }
  return str;
}

$("#button").click(function(){
  var name = $("#input").val();
  console.log(name);
  var nameLength = name.length;
  console.log(namelength);
  var house = getHouse(nameLength);
  console.log(house);
  $("#output").html("<h1>" + house + "<h1>"")

})
