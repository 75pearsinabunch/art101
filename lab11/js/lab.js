/**
 * Author:    Alvaro Perez
 * Created:   02.18.2021
 *
 * (c) Copyright by Alvaro Perez
 **/



var challengesEl = $('#challenges');
var problemsEl = $('#problems');
var resultsEl = $('#results');

var myButton = "<button>Click me</button>";

challengesEl.append(myButton);
problemsEl.append(myButton);
resultsEl.append(myButton);

$('#challenges button').click(function(){
  $('#challenges').toggleClass('special');
})
