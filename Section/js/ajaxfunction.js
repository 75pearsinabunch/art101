// function getAjax(){
// $.ajax({
//   url:"Section/data/data.txt",
//   type:"GET",
//   dataType:"text",
//   success: successFun,
//   error:errorFun,
//   complete:function(xhr, status){
//     console.log("request is complete");
//   }
// });
// }
// function successFun(result){
//   console.log(result);
//   $("#ajax_text").html(result);
// }
// function errorFun(xhr, status, strErr){
//   console.log("error");
// }
// $("#click_ajax").click(getAjax);

function getAjax(){
// $.ajax({
//   url:"https://en.wikipedia.org/api/rest_v1/page/title/Warren_G._Harding",
//   type:"GET",
//   dataType:"json",
//   success: successFun,
//   error:errorFun,
//   complete:function(xhr, status){
//     console.log("request is complete");
//   }
// });
// }
// function successFun(result){
//   console.log(result);
//   $("#ajax_text").html(result.items[0].title);
// }
// function errorFun(xhr, status, strErr){
//   console.log("error");

const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://genius.p.rapidapi.com/artists/16775/songs",
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "77f9d9ff8msh9bc93d96fb25dacp1b7291jsn5be61e72cb6e",
    "x-rapidapi=key": "genius.p.rapidapi.com"
  }
};
$.ajax(settings).done(function(response){
  console.log(response);
  $("#ajax_text").html('<img scr="'+ response.response.songs[10].song_art_image_url+'"/>"')
});
}
$("#click_ajax").click(getAjax);
