/**
* Author:    Alvaro Perez
* Created:   03.02.2021
*
* (c) Copyright by Alvaro Perez
**/
/*function FizzBuzz(num){
  for(var num=1; num <= 200; num++){
    console.log(num);
    if (num%3 == 0){
      console.log("Fizz!")
    }
    if (num%5 == 0){
      console.log("Buzz!")
    }
    if (num%7 == 0){
      console.log("Boom!")
    }
    if (num%3 == 0 && num%5 ==0){
      console.log("FizzBuzz!")
    }
    if (num%5 == 0 && num%7 ==0){
      console.log("BuzzBoom!")
    }
    if (num%3 == 0 && num%7 ==0){
      console.log("FizzBoom!")
    }
    if (num%3 == 0 && num%5 ==0&& num%7 ==0){
      console.log("FizzBuzzBoom!")
    }
  }
}
oneLongString =+ num + " Fizz!<br>";
$("#output").html(oneLongString);
str =+ "Fizz";
$("#output").append("<p>" + str + "</p>");
$("#output").append*/

var oneLongString= "";
for (var num= 1; num <= 200; num++) {
  if (num % 105 == 0) {
    console.log ("fizzbuzzboom");
    oneLongString += num + " - FizzBuzzBoom!<br>";
  }
  else if (num % 15 == 0) {
    console.log ("fizzbuzz");
    oneLongString += num + " - FizzBuzz!<br>";
  }
  else if (num % 35 == 0) {
    console.log ("buzzboom");
    oneLongString += num + " - BuzzBoom!<br>";
  }
  else if (num % 21 == 0) {
    console.log ("fizzboom");
    oneLongString += num + " - FizzBoom!<br>";
  }
  else if (num % 3 == 0) {
    //you can comment out debugger to see it work properly
    debugger;
    console.log ("fizz");
    oneLongString += num + " - Fizz!<br>";
  }
  else if (num % 5 == 0) {
    console.log ("buzz");
    oneLongString += num + " - Buzz!<br>";
  }
  else if (num % 7 == 0) {
    console.log ("boom");
    oneLongString += num + " - Boom!<br>";
  }
  else {console.log(num)
    oneLongString += num + "<br>";
  }
};

$("#output").html(oneLongString);
