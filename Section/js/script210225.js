//keypress
var original_text = $("#orginal_text p").text();
console.log(original_text);

function matchText(){
  var input_text = $("#input_text").val();
  var substring_match = original_text.substring(0,input_text.length);
  console.log(input_text);
  console.log(substring_match);

  if(input_text==original_text){
    $("#input_text").css("border-color","green");
  }else if(input_text==substring_match){
    $("#input_text").css("border-color","blue");
  }else{
    $("#input_text").css("border-color","red");
  }

  //3 conditions
  //test matching before finishing blue
  //text not matching red
  //text matching total green
}
//$("#input_text").keypress(matchText);
$("#input_text").keyup(matchText);
//substring
