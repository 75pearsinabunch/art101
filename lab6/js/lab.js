/*
var myTransport = ["Bus"," Uber/Lift"," Walking"," Bike", " 1995 Ford Taurus"];

var myMainRide = {
    make: 'Ford',
    model: 'Taurus',
    color: 'Rusty',
    year: 1995,
    age : function() {
        return 2021 - age;
    }
}

myMainRide

console.log("Kinds of transportion I  use: " + myTransport);

console.log("My Main Ride: ", myMainRide);
*/
//Define variables
var myTransport = ["Bus"," Uber/Lift"," Walking"," Bike", " 1995 Ford Taurus"];

var myMainRide = {
    make: 'Ford',
    model: 'Taurus',
    color: 'Rusty',
    year: 1995,
    age : function() {
        return 2021 - age;
    }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
