//  Series duration of my life

// My life Span in hours
var lifeSpanInHours = 702240;
var seriesDuration = [];

// Constructor function for seriesDuration objects
function series(title,days,hours,mints) {
this.title = title;
this.days = days;
this.hours = hours;
this.mints = mints;
}

// total duration of your fav series in hours
function seriesDurationInHours(fav1) {
let fav = fav1;
var seriesDurationInHours = (fav.days *24) + fav.hours + (fav.mints/60);
fav.DurationInHours = seriesDurationInHours;
var output = "Total duration of the series named "+fav.title+ " is "+seriesDurationInHours+" hours.";
console.log (output);
}

// how many times can be seen in the full life span 
function howManyTimes(fav1) {
let fav = fav1;
var actualNumOfTimes = lifeSpanInHours/fav.DurationInHours ;
var numOfTimes = actualNumOfTimes.toFixed(2);
fav.NumberOfTimes = numOfTimes;
console.log ( numOfTimes +" times , you can see "+fav.title+" in your lifespan.");
}

// how many percentage of your life span you have spent
function percentOfLifeSpan(fav1) {
let fav = fav1;
var percentOfLifeSpend = fav.NumberOfTimes/lifeSpanInHours;
var percentOfLifeSpend = percentOfLifeSpend.toFixed(2);
fav.PercentOfLifeSpend = percentOfLifeSpend;
seriesDuration.push(fav1);
console.log( fav.title + " took " +percentOfLifeSpend+ "% of your life span. ");
}

// total life spend seeing all series 
var totalSpend = 0;
function totalLifeForSeries() {
for(var i=0;i<seriesDuration.length;i++)
    {
      totalSpend +=parseFloat(seriesDuration[i].PercentOfLifeSpend);
    }
    console.log("Total life spend "+ totalSpend + "%.");
}

// Create 3 seriesDuration objects
var fav1 = new series("Game of Throne",3,1,0);
console.log(fav1.title);
seriesDurationInHours(fav1);
howManyTimes(fav1);
percentOfLifeSpan(fav1);

var fav2 = new series("Sopranes",3,14,0);
console.log(fav2.title);
seriesDurationInHours(fav2);
howManyTimes(fav2);
percentOfLifeSpan(fav2);

var fav3 = new series("The Wire",2,12,0);
console.log(fav3.title);
seriesDurationInHours(fav3);
howManyTimes(fav3);
percentOfLifeSpan(fav3);

totalLifeForSeries();
