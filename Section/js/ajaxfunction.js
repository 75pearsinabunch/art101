function getAjax(){
$.ajax({
  url:"Section/data/data.txt",
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
  $("#ajax_text").html(result);
}
function errorFun(xhr, status, strErr){
  console.lod("error");
}
$("#click_ajax").click(getAjax);
