function dogYear() 
{
    var dogYearOfBirth = document.getElementById("b_years").value;
    var dogYearFuture =document.getElementById("f_years").value;
		var dogYears = dogYearFuture - dogYearOfBirth;
		document.getElementById("age_calc").innerHTML = "Your dog will be "+ dogYears +" dog years old in "+dogYearFuture
}

function humanYear()
{
    var dogYearOfBirth = document.getElementById("b_years").value;
    var dogYearFuture =document.getElementById("f_years").value;
    var humanYears;
     var dogYears = dogYearFuture - dogYearOfBirth;

if(dogYears==1){ humanYears=dogYears*15;} 
else if(dogYears==2){humanYears=24;}
else {humanYears=24+4*(dogYears-2);}

document.getElementById("age_calc").innerHTML = "Your dog will be "+ humanYears +" human years old in "+dogYearFuture;
}


