class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency = (event) => {
        let priceValue = this.price;
        let currencyCoverted = this.name;
        let selectCurrency = event.target.value;
        console.log(selectCurrency);
        fetch('https://api.exchangeratesapi.io/latest?symbols=' + selectCurrency)
            .then(res => res.json())
            .then(res => (res = res.rates[selectCurrency]))
            .then(res => exchangeRateFunc(res,priceValue,currencyCoverted))
    }
}
function exchangeRateFunc(response,priceValue,newCurrency) {
console.log(newCurrency);
    let exchangeRate = parseFloat(response);
    console.log(exchangeRate);
   // let priceValue = document.getElementById("newPrice").value;
    console.log(priceValue);
    document.getElementById(newCurrency).innerHTML = exchangeRate * priceValue;
}
class ShoppingCart {
    constructor(products) {
        this.products = products;
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        let selectedProduct = product;
        this.products = this.products.filter(product => product != selectedProduct)

    }

    searchProduct(productName) {
        this.products = this.products.filter(product => product.name === productName)
    }

    getTotal() {
        let total = this.products.map(product => product.price);
        let sum = 0;
        for (let i = 0; i < total.length; i++) {
            sum += total[i];
        }
        document.getElementById("total").innerHTML = sum;
    }

    renderProducts() {
        let productDiv = document.querySelector("#selected_products");

        this.products.forEach((product) => {
            let ulNew = document.createElement("ul"); // created new ul with id
            //ulNew.setAttribute('id', product.name);

            let liNewProductName = document.createElement("li"); // created new li for product name
            liNewProductName.style.width="150";
            liNewProductName.innerHTML =  product.name;

            let liNewPrice = document.createElement("li");  // created new li for product price
            liNewPrice.innerHTML = product.price;
            liNewPrice.style.width="120";
            liNewPrice.setAttribute('id', 'newPrice');

            let currency = document.createElement('input'); // for countrycode
            currency.setAttribute('id', 'input_currency');
            currency.setAttribute('value', 'DKK');
            currency.addEventListener('change', product.convertToCurrency); // added listener for convertToCurrency
            currency.style.marginLeft = "50";

            let currencyNew = document.createElement('li'); // for converted price
            currencyNew.innerHTML = "Converted Price";
            currencyNew.style.width="120";
            currencyNew.setAttribute('id', product.name);
            currencyNew.setAttribute('class', 'converted_price');
            currencyNew.style.marginLeft = "50";
           

            // created new delete button for product and substraction from total
            let deleteButton = document.createElement('button');
            deleteButton.innerHTML = "Remove";
            deleteButton.setAttribute('id','btn');
            deleteButton.onclick = () => {
                productDiv.removeChild(ulNew);
                let currentTotal = document.getElementById("total").innerText;
                let newTotal = parseInt(currentTotal) - product.price;
                document.getElementById("total").innerHTML = newTotal;
                this.removeProduct(product);
            }
            // append all the child
            ulNew.appendChild(liNewProductName);
            ulNew.appendChild(liNewPrice);
            liNewPrice.appendChild(currency);
            ulNew.appendChild(currencyNew);
            ulNew.appendChild(deleteButton);
            productDiv.appendChild(ulNew);
        })

    }

    getUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(res => {
                document.getElementById("username").innerHTML = res.name;
                document.getElementById("email").innerHTML = res.email;
                document.getElementById("phone").innerHTML = res.phone;
            })
    }
}

const laptop = new Product('Laptop', 5000);
const shoppingCart = new ShoppingCart([laptop]);
const speaker = new Product('Speaker', 2000);
const radio = new Product('Radio', 1000);
const earphone = new Product('Earphone', 1500);
shoppingCart.addProduct(speaker);
shoppingCart.addProduct(radio);
shoppingCart.addProduct(earphone);

console.log(shoppingCart);
shoppingCart.renderProducts();
shoppingCart.getUser();
shoppingCart.getTotal();
