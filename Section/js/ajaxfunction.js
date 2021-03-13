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

// function getAjax(){
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

function getAjax(){
 $.ajax({
  "async": true,
 	"crossDomain": true,
  url:"https://genius.p.rapidapi.com/artists/16775/songs",
   type:"GET",
   dataType:"json",
   headers: {
 		"x-rapidapi-key": "77f9d9ff88msh9bc93d96fb25dacp1b7291jsn5be61e72cb6e",
 		"x-rapidapi-host": "genius.p.rapidapi.com"
 	},
   success: successFun,
   error:errorFun,
   complete: function (xhr, staus){
    console.log("request is complete"+xhr);
   }

 });
 }
 function successFun(result){
   console.log(result);
   for(i=0;i<result.response.songs.length;i++){
   // $("#ajax_text").append('<img style=width:100px src ="'+response.response.songs[i].song_art_image_url+'"/>"')
   $("#ajax_text").append('<figure><img class="images" id="img_id_'+i+'"src="'+result.response.songs[i].song_art_image_url+'"/><figcaption>'+result.response.songs[i].full_title+'</figcaption></figure>')
 }
   //$("#ajax_text").html(result.items[0].title);
 }
 function errorFun(xhr, status, strErr){
   console.log("error "+strErr);
 }
$("#click_ajax").click(getAjax);
