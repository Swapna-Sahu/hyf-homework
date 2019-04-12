//console.log('Script loaded');
//console.log(getAvailableProducts());
var products = getAvailableProducts();
var prices = [];

/**********************************Adding the products *********** */
function productsAdded(product) {
    var ulLocation = document.querySelector('ul');

    product.forEach(function (product) {
        var liNewCreateId = document.createElement('li');
        var divForName = document.createElement('div');
        divForName.setAttribute('class', 'name');
        divForName.innerHTML = product.name;

        liNewCreateId.appendChild(divForName);
        ulLocation.appendChild(liNewCreateId);

        var divForPrice = document.createElement('div');
        divForPrice.setAttribute('class', 'price');
        divForPrice.innerHTML = product.price;
        liNewCreateId.appendChild(divForPrice);

        var divForRating = document.createElement('div');
        divForRating.setAttribute('class', 'rating');
        divForRating.innerHTML = product.rating;
        liNewCreateId.appendChild(divForRating);

        var divForShip = document.createElement('div');
        divForShip.setAttribute('class', 'ships-to');
        liNewCreateId.appendChild(divForShip);

        var ulNewCreateShip = document.createElement('ul');
        for (var i = 0; i < product.shipsTo.length; i++) {
            var liNewCreateFrom = document.createElement('li');
            liNewCreateFrom.innerHTML = product.shipsTo[i];
            ulNewCreateShip.appendChild(liNewCreateFrom);
        }
        divForShip.appendChild(ulNewCreateShip);
        var addButton = document.createElement('button');
        addButton.setAttribute('class', 'Button');
        addButton.setAttribute("id", "add_button");
        //addButton.setAttribute("onclick", "myFunction(this.product)");
        addButton.onclick = () => myFunction(product);
        addButton.innerHTML = "Add to cart";
        liNewCreateId.appendChild(addButton);


    })
}

/************************************ Price analytics ***************************/
function printServerMessage(message) {
    console.log(message);
}
//sendPricesToServer(prices, printServerMessage);


/***************************  Render products function**********************************/
function renderProducts(product) {
    document.querySelector('ul').setAttribute('id', 'current_product');
    document.getElementById('current_product').innerHTML = '';
    productsAdded(product);
}


/********************** user serached product***********************************/

var userInput = document.querySelector("input");
userInput.setAttribute('id', "input_data");
userInput.setAttribute('value', "");
userInput.setAttribute('onchange', "userInputFunc(this.value)");
var inputValue = document.getElementById("input_data").value;
console.log(inputValue);

function userInputFunc(val) {
    console.log("The input value has changed. The new value is: " + val);
    var searchedResult = products.filter(product => product.name === val);
    console.log(searchedResult);
    renderProducts(searchedResult);
}

/************************  Showing products that ships to country*************/
var shipingLocation = document.querySelectorAll("select");
shipingLocation[1].setAttribute('id', "select_location");
shipingLocation[1].setAttribute('value', "");
shipingLocation[1].setAttribute('onchange', "userLocationSelect(this.value)");
var selectLocation = document.getElementById("select_location").value;
console.log(selectLocation);

function userLocationSelect(val) {
    console.log("The input location has changed. The new location is: " + val);

    var selectedLocation = val.charAt(0).toUpperCase() + val.slice(1);
    console.log(selectedLocation);
    // var shippingTo = products.map(product => product.shipsTo);
    //console.log(shippingTo);
    var location1 = products.filter(product => product.shipsTo.includes(selectedLocation));
    console.log(location1);
    renderProducts(location1);
}

/************************ Sorting************************************************/

var ascOrderName = products.sort((a, b) => a.name > b.name ? 1 : -1);
console.log("Sorted the name of the products ");
console.log(ascOrderName);

/************************shopping cart*************/

function myFunction(product) {

    var h2location = document.querySelectorAll("h2");

    var UlNewForCart = document.createElement('ul');
    h2location[1].appendChild(UlNewForCart);
    var liNewForCart = document.createElement('li');
    var divForProductName = document.createElement('div');
    var divForProductPrice = document.createElement('div');

    divForProductName.setAttribute('class', 'name');
    divForProductName.innerHTML = product.name;
    divForProductName.style.fontSize = 15;
    divForProductPrice.setAttribute('class', 'price');
    divForProductPrice.innerHTML = product.price;
    divForProductPrice.style.fontSize = 15;
    liNewForCart.appendChild(divForProductName);
    liNewForCart.appendChild(divForProductPrice);
    UlNewForCart.appendChild(liNewForCart);

    var total = document.querySelector(".total p");
    total.style.color = 'red';
    let currentTotal = parseInt(total.innerHTML);
    if (currentTotal) {
        currentTotal += product.price;
    }
    else {
        currentTotal = product.price;
    }
    total.innerHTML = "Total : " + currentTotal;
}

productsAdded(products);

products.forEach(function (product) {
    prices = products.map(product => product.price);
})

console.log("Prices of the Products are : ")
console.log(prices);

sendPricesToServer(prices, printServerMessage);

var inputValue = document.getElementById("input_data").value;
console.log(inputValue);
