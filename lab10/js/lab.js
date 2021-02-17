/**
 * Author:    Alvaro Perez
 * Created:   02.11.2021
 *
 * (c) Copyright by Alvaro Perez
 **/
//sortUserName - a function that takes user input ands sorts the letters
//of their name

// function sortUserName(){
//   var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
//   console.log("userName =", userName);
//   //split string to Array
//   var nameArray = userName.split('');
//   console.log("nameArray =", nameArray);
//   //sort the Array
//   var nameArraySort = nameArray.sort();
//   console.log("nameArraySort =",nameArraySort);
//   //join array back to a string
//   var nameSorted = nameArraySort.join('');
//   console.log("nameSorted =", nameSorted);
//   //Note thatI could have done the above lines as a single line:
//   //   userName.toLower().split("").sort().join("");
//   return nameSorted;
// }
//
// //Output
// document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "</br>")


buttonEl = document.getElementById("submit-button");
buttonEl.addEventListener("click", function(){
  //var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  nameEl = document.getElementById("user-name");
  var username = nameEl.value;
  username = username.toLowerCase().split("").sort().join("");
  console.log("username =", username);
  replaceEl = document.getElementById("replaced");
  replaceEl.innerText = username;

});

buttonEl2 = document.getElementById("submit-button2");
buttonEl2.addEventListener("click", function(){
  //var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  nameEl2 = document.getElementById("user-name2");
  var username2 = nameEl2.value;
  console.log("username2 =", username2);
  titleEl = document.getElementById("title");
  titleEl.innerText = username2;

});
