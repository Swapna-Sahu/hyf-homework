var firstWords= ["Hello","Awesome","Wonderful","Beautiful","Peaceful","Easy","Strong","New","Quick","Magical"];

var secondWords= ["World","Earth","Planet","Creature","Nature","Life","Mind","Life","Solution","Universa"];

var x = Math.floor(Math.random()*10)+0;
/*--------------Name with two words ---------------------*/
var startupName =firstWords[x]+" "+ secondWords[x]; 
var numberOfChar = firstWords[x].length+secondWords[x].length;
var output = "The startup: "+startupName+" contains "+numberOfChar+ " characters ";
console.log(output);
