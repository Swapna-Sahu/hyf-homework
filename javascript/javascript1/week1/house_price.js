/*-------------Check with both name (Peter and Julie) and variables-----------*/

var name ="Peter";
var wide= 8;

var deep=10;

var height=10;

var gardenSizeInM2=100;

var actualPrice = 250000;

/*-----------function for checking house price----------------------*/

var volumeInMeters = wide * deep * height;

var housePrice = volumeInMeters*2.5*1000+gardenSizeInM2*300;


/*----------------Comparing the price differnece------------------*/

output = ((housePrice < actualPrice)? "too low" : "too high");

var statement = "The actual price of house is "+actualPrice+ "and "+ name + " is paying "+housePrice+ " which is "+output+".";
console.log(statement);
