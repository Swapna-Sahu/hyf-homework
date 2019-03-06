var firstWords= ["Hello","Awesome","Wonderful","Beautiful","Peaceful","Easy","Strong","New","Quick","Magical"];
var secondWords= ["World","Earth","Planet","Creature","Nature","Life","Mind","Life","Solution","Universa"];

var randomNumber = Math.floor(Math.random()*10)+0;

/*--------------Name with two words ---------------------*/

var startupName =firstWords[randomNumber]+" "+ secondWords[randomNumber]; 
var numberOfChar = firstWords[randomNumber].length+secondWords[randomNumber].length;
var output = "The startup: "+startupName+" contains "+numberOfChar+ " characters ";
console.log(output);
