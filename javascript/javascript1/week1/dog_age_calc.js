var dogYearOfBirth =2015;
var dogYearFuture =2019;
var dogYears;
var humanYears;

/*---------- Actual Dog Age calculation ------------------------*/

dogYears = dogYearFuture - dogYearOfBirth;


if(dogYears==1)
{
humanYears=dogYears*15;
} 
else if(dogYears==2)
{
humanYears=24;
}
else 
{
humanYears=24+4*(dogYears-2);
}

/*-----------------------Working with Boolean --------------*/

var shouldShowResultInDogYears = false;
if(shouldShowResultInDogYears){
var output = "Your dog will be "+ dogYears +" dog years old in "+dogYearFuture ;
console.log(output);
}else{
var output = "Your dog will be "+ humanYears +" human years old in "+dogYearFuture;
console.log(output);
}
