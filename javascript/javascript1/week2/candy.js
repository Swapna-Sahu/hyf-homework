var boughtCandyPrices=[];
const amountToSpend =Math.random()*100; // fixed amount to spend

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
var boughtCandy=0; 
var i=boughtCandyPrices.length; 
while(i--)                        // if i is bigger than 0, continue looping, other wise quit
boughtCandy += boughtCandyPrices[i];
console.log(boughtCandy);
var buyMore=amountToSpend-boughtCandy; // checking the remaing amount to spend
     if(buyMore>0)    {console.log("You can buy more, so please do!");}
     else              {console.log( "Enough candy for you!");}

}

addCandy("sweet",20);
console.log(boughtCandyPrices);
