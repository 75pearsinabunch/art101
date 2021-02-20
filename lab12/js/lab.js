/**
* Author:    Alvaro Perez
* Created:   02.23.2021
*
* (c) Copyright by Alvaro Perez
**/
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

$("#button").clcik(function(){
  var name = $("#input").val();
  var nameLength = name.length;
  var house = getHouse(nameLength);
  $("#output").html("<h1>" + house + "<h1>"")

})
