/*fetch ('https://api.github.com/search/repositories?q=user:benna100')
.then(res => res.json())
.then(res => console.log(res))

*/

let ulLocationHema = document.querySelector("#hema");
let ulLocationRahim = document.querySelector("#rahim");
let ulLocationNayana = document.querySelector("#nayana");

let hema = () => {
  return fetch('https://api.github.com/search/repositories?q=user:hemagunti')
    .then(res => res.json())
    .then(res => {
      showRepo(res, ulLocationHema)
    })
}
let rahim = () => {
  return fetch('https://api.github.com/search/repositories?q=user:ismailirahim')
    .then(res => res.json())
    .then(res => {
      showRepo(res, ulLocationRahim)
    })
}
let nayana = () => {
  return fetch('https://api.github.com/search/repositories?q=user:NayanaKamtekar')
    .then(res => res.json())
    .then(res => {
      showRepo(res, ulLocationNayana)
    })
}

function friendsRepositories() {
  Promise.all([hema(), rahim(), nayana()]).then(res => console.log(res))
}
friendsRepositories();


function showRepo(res, ulposition) {
  ulLocation = ulposition;
  let itemLength = res.total_count;
  for (let i = 0; i < itemLength; i++) {
    let liCreate = document.createElement("li");
    liCreate.innerHTML = res.items[i].name + " : " + res.items[i].url;
    ulLocation.appendChild(liCreate);
  }
}