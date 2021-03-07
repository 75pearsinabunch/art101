/**
* Author:    Alvaro Perez
* Created:   03.06.2021
*
* (c) Copyright by Alvaro Perez
**/
//Got code from Toni Section C
// function getAjax(){
//   $.ajax({
//     url:"https://xkcd.com/614/info.0.json",
//     type:"GET",
//     dataType:"json",
//     success: successFun,
//     error:errorFun,
//     complete:function(xhr, status){
//       console.log("request is complete");
//     }
//   });
// }
// function successFun(result){
//   console.log(result);
//   $("#output").html(result.items[0].month);
// }
// function errorFun(xhr, status, strErr){
//   console.log("error");
// }
// $("#activate").click(getAjax);
//function that
function getAjax() {
  $.ajax({
    url: "https://xkcd.com/614/info.0.json",
    data: { },
    type: "GET",
    dataType : "json",
    //if successfull then do this
    success: function( data ) {
      var textData = JSON.stringify(data);
      //empty list to hold stuff
      var empty = "";
      var image = data.img;
      var title = data.title;
      var alt = data.alt;
      empty += "<h2>" + title + "</h1>";
      empty += "<img src='" + image + "' title='" + alt + "'>"
      printing(empty);
      console.log("Success:", textData);
      $("#alt").html(alt);
    }
  })
    // tells me if fails
  .fail(function( xhr, status, strErr ) {
    console.log("Failure.");
    printing(strErr + " Status:" + status);
  })
}
//prints out the string
function printing(text){
  $("#output").html(text);
}
//button
$("#activate").click(getAjax);
