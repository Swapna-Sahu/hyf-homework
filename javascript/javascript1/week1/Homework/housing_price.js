function housePriceComparision(){
var name=document.getElementById("name").value;
var wide=document.getElementById("wide").value;
var deep=document.getElementById("depth").value;
var height=document.getElementById("height").value;
var gardenSizeInM2=document.getElementById("garden").value;
var actualPrice=document.getElementById("actual_price").value;

var volumeInMeters = wide * deep * height;

var housePrice = volumeInMeters*2.5*1000+gardenSizeInM2*300;

var output = ((housePrice < actualPrice)? "too low" : "too high");
document.getElementById("price_comparision").innerHTML= "The actual price of house is "+actualPrice+ " and "+ name + " is paying "+housePrice+ " which is "+output+".";

}