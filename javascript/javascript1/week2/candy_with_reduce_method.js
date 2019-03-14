var boughtCandyPrices=[];
const amountToSpend =Math.random()*100;

function addCandy(candyType,weight)
{
var candyFlavour= candyType;
var grams=weight;
var price;

switch (candyFlavour) {   // choose the flavor 
    case "sweet":    
                price = 0.5*grams;    
                break;
    case "chocolate":    
                price = 0.7*grams;    
                break; 
    case "toffee":    
                price = 1.1*grams;   
                break;  
    case "chewing-gum":   
                price = 0.03*grams;   
}
return boughtCandyPrices.push(price); // storing the price in boughtCandyPrices array
}



function canBuyMoreCandy(){
var boughtCandy=
boughtCandyPrices.reduce((a, b) => a + b, 0);
console.log(boughtCandy);
var buyMore=amountToSpend-boughtCandy;
if(buyMore>=0)      {console.log("You can buy more, so please do!");}
else                {console.log( "Enough candy for you!");}
}

addCandy("sweet",20);
console.log(boughtCandyPrices);


