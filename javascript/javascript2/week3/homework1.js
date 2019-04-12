var numbers = [1, 2, 3, 4];
var newNumbers = [];
var num;

var oddNumber = numbers.filter(number => (number % 2) !== 0);
var newNumbers = oddNumber.map(num => num * 2);
console.log("The doubled numbers are", newNumbers);

// short title movies
var shortTitle = movies.filter(function (movie) {
    return movie.title.length < 10;
})
console.log("Short Title Movies List");
console.log(shortTitle);

// long title movies
var longTitle = movies.filter(function (movie) {
    return movie.title.length > 10;
})
console.log("Long Title Movies List");
console.log(longTitle);

// movies made between 1980 and 1989
var between1980_1989 = movies.filter(function (movie) {
    return (movie.year >= 1980 && movie.year <= 1989);
})
console.log("Movies list  made between 1980 and 1989 ");
console.log(between1980_1989);

//Creating an extra key called tag
var createGood = movies.filter(function (movie) {
    return (movie.rating >= 7);
})
createGood.forEach(movie => movie.tag = "Good");

var createAverage = movies.filter(function (movie) {
    return (movie.rating >= 4 && movie.rating < 7);
})
createAverage.forEach(movie => movie.tag = "Average");

var createBad = movies.filter(function (movie) {
    return (movie.rating < 4);
})
createBad.forEach(movie => movie.tag = "Bad");


// Movie rating for higher than 6
var higherRating = movies.filter(movie => movie.rating > 6) 
            .map(movie => movie.rating);
console.log("Higher Rating Array : "+ higherRating);          

// Movies contains Surfer , Alien and Benjamin
var filteredMovies =[]; var count = 0;
movies.forEach(function (movie){
 filteredMovies = movies.filter(movie=>movie.title.includes("Surfer") ||movie.title.includes("Alien") || movie.title.includes("Benjamin"));
})
console.log("Movies contains Surfer , Alien and Benjamin are "+ filteredMovies.length);
console.log(filteredMovies);

