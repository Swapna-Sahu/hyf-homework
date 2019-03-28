
var spiritAnimal = ["Lion - exceptional strength", "Deer - love and harmony", " Butterfly - transformation",
    "Spider - feminine energy and creativity", "Horse - Driving source", "Owl - ancient wisdom and knowledge",
    "Crow - life magic,the mistery of creation,intelligence", "Fox - cunning, sharpness of mental skills",
    "Dragonfily - adaptability, connection with nature's spirits", "Snake - connection with life force and primal energy"
];

function spiritAnimalName() {
    
    var name = document.getElementById("name").value;
    if(!name) {alert("Please enter your name");}
    let  randomNumber = Math.floor(Math.random() * 10);
    var spiritAnimalName = spiritAnimal[randomNumber];
    document.getElementById("spirit_animal_name").innerHTML = "Name : " + name +  " - " + spiritAnimalName;
}
