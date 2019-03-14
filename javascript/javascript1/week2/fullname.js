function getFullname(firstname,surname,useFormalName){

var fullname1=firstname;
var fullname2=surname;

if(useFormalName)
{return ("Lord "+fullname1+" "+fullname2);}
else
{return (fullname1+" "+fullname2);}
}

var userName1 =getFullname("Benjamin", "Hughes",true);
var userName2 = getFullname("Benjamin", "Hughes");
console.log(userName1);
console.log(userName2);
