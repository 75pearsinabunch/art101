/**
* Author:    Alvaro Perez
* Created:   03.04.2021
*
* (c) Copyright by Alvaro Perez
**/

function getAjax(){
$.ajax({
  url:"http://numbersapi.com/random/year",
  type:"GET",
  dataType:"text",
  success: successFun,
  error:errorFun,
  complete:function(xhr, status){
    console.log("request is complete");
  }
});
}
function successFun(result){
  console.log(result);
  $("#output").html(result);
}
function errorFun(xhr, status, strErr){
  console.lod("error");
}
$("#activate").click(getAjax);
