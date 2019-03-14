function eventWeekday(afterDays){

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dateToday =new Date();  // fetching today`s date
var numDay=dateToday.getDay(); // getting the number of the day 
var today = days[numDay]; // today`s day
var eventDay=afterDays; // assigning the parameter to a local variable
var eventNumDay =(eventDay%7+numDay)%7; // Math Calculation
var eventWeekDays=days[eventNumDay]; // event day
var output = "Today is "+today+" and the events is in "+eventDay+" days. "+"Therefore the event will be held on a "+eventWeekDays;
return output;
}

eventWeekday(20);
