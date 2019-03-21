// Item array removal

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomNumber = parseInt(Math.random() * 11);

for(i=0;i<numbersArray.length;i++)
if(randomNumber===numbersArray[i]){
var removed = numbersArray.splice(i,1);
i--;
}
console.log("Actual array is  : "+ numbersArray);
console.log("Removed Item is : "+ randomNumber);
console.log("After removing the item from the array : "+numbersArray);
