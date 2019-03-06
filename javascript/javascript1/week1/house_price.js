/*-------------House Price Checking for Peter-----------*/

var wide= 8;
var deep=10;
var height=10;
var gardenSizeInM2=100;
var actualPrice = 250000;

var volumeInMeters = wide * deep * height;
var housePrice = volumeInMeters*2.5*1000+gardenSizeInM2*300;

output = ((housePrice < actualPrice)? "too low" : "too high");

var statement = "The actual price of house is "+actualPrice+ "and Peter is paying "+housePrice+ " which is "+output+".";
console.log(statement);

/*--------------------House Price Checking for Julia-------------------*/
var wide= 5;
var deep=11;
var height=8;
var gardenSizeInM2=70;
var actualPrice = 1000000;

var volumeInMeters = wide * deep * height;
var housePrice = volumeInMeters*2.5*1000+gardenSizeInM2*300;

output = ((housePrice < actualPrice)? "too low" : "too high");

var statement = "The actual price of house is "+actualPrice+ "and Julia is paying "+housePrice+ " which is "+output+".";
console.log(statement);

