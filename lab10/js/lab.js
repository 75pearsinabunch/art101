/**
 * Author:    Alvaro Perez
 * Created:   02.10.2021
 *
 * (c) Copyright by Alvaro Perez
 **/

var buttonEl = document.getElementById('submit-button');
buttonEl.addEventListener("click", function(){
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("username name: ",userName);
  titleEl = document.getElementById("title");
  titleEl.innerText = userName;
});
