// 1. (Main theme: Programming Basics)
// Write a function that logs to the console numbers 1 to 100.
// However, if the number is divisible by 3 it should log to the console "This is divisible by 3"
// If it's divisible by 5 it should log "This is divisible by 5"
// If it's divisible by both 3 and 5 it should log "Jackpot!"
// Hint: use the modulo operator (%) to figure out if two numbers are divisible. Make sure the remainder is 0.
// An example: 14 is divisible by 7, because 14 ÷ 7 = 2 exactly. 11 is not divisible by 7.

// 2. (Main theme: DOM manipulation)
// Using JavaScript, create a button and add it to the html (the document)
// When the button is clicked, insert an <img> tag to the html with a random image

// 3. (Main theme: Async API calls)
// Make an API call using the Fetch API. Make use of the following API: https://reqres.in/api/users
// Display the first_name of the first three users in the DOM


// Write a function that logs to the console numbers 1 to 100.
let numbers= [];
function countNumber() {
    
    for(let i = 1; i<=100; i++)
    {
        numbers[i]= i;
        
    }
}
countNumber();
console.log(numbers);


// However, if the number is divisible by 3 it should log to the console "This is divisible by 3"
for(let i= 1;i<=100; i++) {
    if(numbers[i]%3 ===0){
    console.log("This is divisible by 3");
    }
    }

// If it's divisible by 5 it should log "This is divisible by 5"

for(let i= 1;i<=100; i++) {
    if(numbers[i]%5 ===0){
    console.log("This is divisible by 5");
    }
    }
 //   If it's divisible by both 3 and 5 it should log "Jackpot!"

    for(let i= 1;i<=100; i++) {
        if((numbers[i]%3==0) && (numbers[i]%5==0)){
        console.log("JackPots");
        }
    }    

    function renderFunc () {
let location = document.getElementById("test");

let newButton = document.createElement('button');
newButton.setAttribute('id',"btn");
newButton.innerHTML= "Click Me";
newButton.style.width="100px";
newButton.style.height="50px";
newButton.setAttribute("onclick","printImage()");
location.appendChild(newButton);

    }
    renderFunc();

    function printImage() {
        let location = document.querySelector("test");      
let image = document.createElement('img');
image.setAttribute("src" ,"image.jpg");
location.appendChild(image);

    }

// 3. (Main theme: Async API calls)
    fetch(' https://reqres.in/api/users')
.then(res => res.json())
.then(res => console.log(res));

let username1 = document.querySelector("#user1");
let username2 = document.querySelector("#user2");
let uusername3 = document.querySelector("#user3");

let user1 = () => {
  return fetch(' https://reqres.in/api/users?q=username1')
    .then(res => res.json())
    .then(res => {
      showRepo(res, username1)
    })
}
let user2 = () => {
  return fetch(' https://reqres.in/api/users?q=username2')
    .then(res => res.json())
    .then(res => {
      showRepo(res, username2)
    })
}
let user3 = () => {
  return fetch(' https://reqres.in/api/users?q=username3')
    .then(res => res.json())
    .then(res => {
      showRepo(res, username3)
    })
}