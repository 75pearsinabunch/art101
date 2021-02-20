//change name, email. and message to user's input 2/16/21
function submitBio(){
var nameVar = document.getElementById("name").value;
console.log(nameVar);
var emailVar = document.getElementById("email").value;
console.log(emailVar);
var messageVar = document.getElementById("message").value;
console.log(messageVar);
document.getElementById("name_email_id").innerHTML = nameVar +" EMAIL: " + emailVar;
document.getElementById("bio_id").innerHTML = messageVar;
}
document.getElementById("bio_submit_id").addEventListener('click',submitBio);

// chnages name, email, and meassge color to green 2/18/21
// function colorMe(){
  //document.getElementById('name_email_id').style.color = "green";
//   document.getElementById('name_email_id').className+=""+"color_me";
// }
// document.getElementById("color_me_id").addEventListener('click', colorMe);

$("#color_me_id").click(function(){
  $('#name_email_id').toggleClass("color_me");
})
