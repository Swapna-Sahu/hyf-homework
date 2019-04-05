setTimeout(function(){ alert("Hello"); }, 2500);
/******************************************************************************* */
var logoutFun;
function stringTolog(str){
  alert(str);
}
function twoParaFunc(str,delay) {
setTimeout(stringTolog(str),delay);
}
twoParaFunc("How are you",3000);
clearTimeout(logoutFun);
/****************************************************************** */
var logoutFun;
function stringTolog(){
  console.log("How are you");
}
function onclickFunc() {
logoutFun = setTimeout(stringTolog(),3000);
clearTimeout(logoutFun);
}

//--------------- function calling another function 
var earthVar = function earthFunc(){
    console.log("I am Earth.");
  }
  var saturnVar = function saturnFunc() {
  console.log("I am Saturn.");
  }
  
  function planetFunc(planetLogFunction){
    console.log("Which planets is it ?");
    return planetLogFunction;
    }
  
  setTimeout(planetFunc(earthVar),2500);
   setTimeout(planetFunc(saturnVar),3000);
  

 //------------- Run after delay task 
 var run ;
function runAfterDelay(callback,delay) {  
   run = setTimeout(callback,delay);
}

function firstFunc () {
  console.log("Hello!");
}

function secondFunc () {
  console.log("How are you!");
}

runAfterDelay(firstFunc,2000);
runAfterDelay(secondFunc,3000);


//------------- double clicked method 
document.getElementById("demo").ondblclick = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "I was double-clicked!";
}

//--------------joke task method
function jokeCreator(shouldTellFunnyJoke,logFunnyJoke,logBadJoke) {
  var tellFunnyJoke = shouldTellFunnyJoke;
  if(tellFunnyJoke){
    logFunnyJoke();
  }
  else{
    logBadJoke();
  }
}
function logFunnyJoke() {
  console.log("this is funny joke.!");
}

function logBadJoke() {
  console.log("this is bad joke.!");
}
jokeCreator(true,logFunnyJoke,logBadJoke);
jokeCreator(false,logFunnyJoke,logBadJoke);
/************************************************************************************* */

var arrayOfFunc = [firstFunc,secondFunc,thirdFunc];
function firstFunc() {
  console.log("First function called");
}
function secondFunc() {
  console.log("Second function called");
}
function thirdFunc() {
  console.log("Third function called");
}

for(var i=0;i<arrayOfFunc.length;i++)
  {
    arrayOfFunc[i]();
  }
  /********************************************************************************* */

  const consFunc = function consFuncCall() {
    console.log ("Hello, I am const function");
    }
    var varFunc = function varFuncCall() {
    console.log ("Hello, I am normal function");
    }
    
    var arrOfFunc = [consFunc,varFunc];
    for (i=0;i < arrOfFunc.length; i++)
    {
     console.log (arrOfFunc[i]());
    }
    /*************************************************************** */
    var funObject = {
      name : "funcObject",
      printFunc : function() {
    console.log("I am function inside the object");
    }
    }
    funObject.printFunc();
    /**************************************************************** */
    function outer() {
      console.log("I am outer function");  
          return (function inner() { console.log("I am inner function"); });   
  }
  
  var outerVar = outer();
  outerVar();