var dogYearOfBirth =2015;
var dogYearFuture =2019;
var dogYears;
var humanYears;

dogYears = dogYearFuture - dogYearOfBirth;
humanYears = dogYears*7;

var shouldShowResultInDogYears = true;
if(shouldShowResultInDogYears === true)
 {
	var output = "Your dog will be "+ dogYears +" dog years old in "+dogYearFuture ;
	console.log(output);
 }
else
 {
  	var output = "Your dog will be "+ humanYears +" human years old in "+dogYearFuture;
  	console.log(output);
 }

