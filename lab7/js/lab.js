//sortUserName - a function that takes user input ands sorts the letters
//of their name

function sortUserName(){
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  //split string to Array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the Array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =",nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //Note thatI could have done the above lines as a single line:
  //   userName.toLower().split("").sort().join("");
  return nameSorted;
}

//Output
document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "</br>")
