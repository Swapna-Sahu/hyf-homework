
function searchGiphy() {
    var giphyName = document.getElementById("giphy").value;
    if(giphyName.trim()=== "")  {
        alert("Please enter your giphy word.");
    }else {
        document.getElementById("giphy").innerHTML = giphyName;
    }    
    

    fetch ('https://api.giphy.com/v1/gifs/search?q='+ giphyName +'&api_key=Yzr1Vz2gwGTUAr3HDiqBUhUFrWPt2y1v')
        .then(response => response.json())
        .then((res) => {
            console.log(res);
            displayGiphy(res);    
        });
}

function displayGiphy(res) { 

    document.getElementById("searchedWord").innerHTML="";
    let arrayLength= res.data.length;
    let location = document.querySelector("#searchedWord");

    for(i=0;i<arrayLength;i++) {

    var heading = document.createElement('h3');
    heading.innerHTML= res.data[i].title;


    let image = document.createElement('img');
    image.src = res.data[i].images.original.url;
    
    
    location.appendChild(heading);
    location.appendChild(image);
    }
}

