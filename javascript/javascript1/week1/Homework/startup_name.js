function startupName(){
var firstWords=[];
 firstWords[0]=document.getElementById("first1").value;
 firstWords[1]=document.getElementById("first2").value;
 firstWords[2]=document.getElementById("first3").value;
 firstWords[3]=document.getElementById("first4").value;
 firstWords[4]=document.getElementById("first5").value;
var secondWords=[];
 secondWords[0]=document.getElementById("second1").value;
 secondWords[1]=document.getElementById("second2").value;
 secondWords[2]=document.getElementById("second3").value;
 secondWords[3]=document.getElementById("second4").value;
 secondWords[4]=document.getElementById("second5").value;
var x = Math.floor(Math.random()*10);

document.getElementById("startup_name").innerHTML =firstWords[x]+" "+ secondWords[x]; 
}

