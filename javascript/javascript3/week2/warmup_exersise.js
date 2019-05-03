// Bad movies whose rating is less than 5 

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(res => res.json())
.then(res => console.log(res.filter(res => res.rating <5)))


// Bad movies since year 2000
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(res => res.json())
.then(res => console.log(res.filter(res => res.rating <5).filter(res => res.year > 2000)))


// An array of the titles of the bad movies since year 2000
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(res => res.json())
.then(res => console.log(res.filter(res => res.rating <5).filter(res => res.year > 2000).map(res => res.title)))


// Promise that resolves after set time
function myfunction (resolveAfter) {
    return new Promise((resolve,reject) => {setTimeout((resolveAfter) => {resolve("I am called asynchronously");},resolveAfter*1000);})
    }
    var x = myfunction(3);
    x.then(res => console.log(res));


function setTimeoutPromise() { return new Promise((resolve) => {setTimeout(()=> {resolve("Resolved");}, 3000);});
}
setTimeoutPromise().then(() => {
console.log('Called after 3 seconds');
});    


function getCurrentLocation() {
    return new Promise( function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);        
    });
}
    
    getCurrentLocation().then((position) => {
            
            console.log(position);
        })
        .catch((error) => {
            
            console.log(error);
        });

//Fetching and Waiting

Promise = fetch('https://dog.ceo/api/breeds/image/random');
Promise.then ((response) => response.json())
.then((res)=> { setTimeout(()=> {console.log(res);},3000);}) 