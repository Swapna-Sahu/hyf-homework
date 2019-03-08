function futureage(){

var yearOfBirth = document.getElementById("b_years").value;
var yearFuture = document.getElementById("f_years").value;

var age = yearFuture - yearOfBirth ;

document.getElementById("age_calc").innerHTML = "You will be "+age+" years old in "+ yearFuture;
}

