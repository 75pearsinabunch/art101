/**
 * Author:    Alvaro Perez
 * Created:   02.10.2021
 *
 * (c) Copyright by Alvaro Perez
 **/

var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
new1El.innerHTML = "I have transformed!!!";
var new2El = document.createElement("h1");
new2El.innerHTML = "So, what is different?";

var new3El = document.createElement("h1");
var newtext = document.createTextNode("This is suppose to be last.");
new3El.appendChild(newtext);

document.body.appendChild(new1El);
document.body.appendChild(new2El);

var newchild = document.getElementById("p1");
outputEl.insertBefore(new3El,newchild);
