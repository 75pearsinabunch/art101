/*
var varname = "SectionC";
console.log(varname);
varname = "I changed section";
console.log(varname);
//2-2-2021
console.log("my Javascript loaded");
var nameVar = "Toni";
var numnNumb = 17;
//console.log(nameVar);
//console.log(numNumb);
numNumb = 25;
//console.log(numNumb);
numNumb = 4;
console.log(numNumb);
function firstFunction(){
  console.log("This is my first function");
}
firstFunction();

function testBigger (firstnum, secondNum){
  console.log(firstnum>secondNum);
}

var nameVar = "Toni";
var numnNumb = 17;
firstFunction();
testBigger(5,8);



function testBiggerWithReturn(firstNum, secondNum){
  var result;
  result = firstNum > secondNum;
  console.log(result);
  return result;
}
var sum = testBiggerWithReturn(10,15);
console.log(testBiggerWithReturn(10,15));
console.log(sum);
sum = sum +8;
console.log(8);
*/

function userName(firstName, lastName) {
  var result = "My first name is: " + firstName + ", " + "My last name is: " + lastName;
  return result;
}
console.log(userName("Tom", "The Cat"));

var myVarFun = function(){
  console.log("Functions are nice!");
}
myVarFun();

setTimeout(function(){
    console.log("Look mah! No name!");
},4000);

setTimeout(myVarFun, 2000)
