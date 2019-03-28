function shortestword(testArray) {
    let wordLength = [];
    for (let i = 0; i < testArray.length; i++) {
        wordLength[i] = testArray[i].length;
    }
    let miniWordLength = Math.min(...wordLength);
    let miniWord = wordLength.indexOf(miniWordLength);
    console.log("The shortest word of the array is " + testArray[miniWord] + " of length " + miniWordLength);
}

let stringArray = ["Hello", "hej", "Myworld", "universe", "earth"];
shortestword(stringArray);

//*************************************************************************************************************

function median(numArray) {
    let sortedArray = numArray.sort(function (a, b) { return a - b });
    let arrayLength = sortedArray.length;
    let medianOfArray = ((arrayLength + 1) / 2);
    console.log("The median of the array is " + medianOfArray);
    return medianOfArray;
}

let numberArray = [100, 4, 89, 23, 11, 0, 15];
median(numberArray);
//************************************************************************************************* */
function average(arr) {
    let arrLength = arr.length;
    let total = arr.reduce((a, b) => a + b);
    let averageOfArray = total / arrLength;
    console.log("The average of array is " + averageOfArray);
    return averageOfArray;
}

function calcMedianAverage (arr) {
    let houseMedian = median(arr);
    let houseAverage = average(arr);
    var houseRate = new Object();
    houseRate.medianOfHouse = houseMedian;
    houseRate.averageOfHouse = houseAverage; 
    return houseRate ;
}
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
calcMedianAverage (housePrices);
