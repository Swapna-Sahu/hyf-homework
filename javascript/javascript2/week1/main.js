let bookList = ["In Search of Lost Time", "Don Quixote", "Ulysses", "The Great Gatsby", "Moby Dick", "Hamlet", "War and Peace", "The Odyssey", "One Hundred Years of Solitude", "The Divine Comedy"];

// Constructor for book object
function book(id, title, language, author) {
  this.id = id;
  this.title = title;
  this.language = language;
  this.author = author;
}

// Constructor for book image object
function bookImage(bookId, imageSource) {
  this.bookId = bookId;
  this.image = imageSource;
}

// Array of image object
var image = [{ bookId: "in_search_of_lost_time", imageSource: "images/image1.jpg" },
{ bookId: "don_quixote", imageSource: "images/image2.jpg" }, { bookId: "&ulysses", imageSource: "images/image3.jpg" },
{ bookId: "the_great_gatsby", imageSource: "images/image4.jpg" }, { bookId: "moby_dick", imageSource: "images/image5.jpg" },
{ bookId: "#hamlet", imageSource: "images/image6.jpg" }, { bookId: "war_and_peace", imageSource: "images/image7.jpg" },
{ bookId: "the_odyssey", imageSource: "images/image8.jpg" }, { bookId: "one_hundred_years_of_solitude", imageSource: "images/image9.jpg" },
{ bookId: "the_divine_comedy", imageSource: "images/image10.jpg" }];

// 10 book objects created
bookList[0] = new book("in_search_of_lost_time", "In Search of Lost Time", "English", "Marcel Proust");
bookList[1] = new book("don_quixote", "Don Quixote", "English", "Miguel de Cervantes");
bookList[2] = new book("&ulysses", "Ulysses", "English", "James Joyce");
bookList[3] = new book("the_great_gatsby", "The Great Gatsby", "English", "F. Scott Fitzgerald");
bookList[4] = new book("moby_dick", "Moby Dick", "English", "Herman Melville");
bookList[5] = new book("#hamlet", "Hamlet", "English", "William Shakespeare");
bookList[6] = new book("war_and_peace", "War and Peace", "English", "Leo Tolstoy");
bookList[7] = new book("the_odyssey", "The Odyssey", "English", "Homer");
bookList[8] = new book("one_hundred_years_of_solitude", "One Hundred Years of Solitude", "English", "Gabriel Garcia Marquez");
bookList[9] = new book("the_divine_comedy", "The Divine Comedy", "English", "Dante Alighieri");

function displayBook(arr) {
  var h1Location = document.querySelector('h1');

  for (var i = 0; i < bookList.length; i++) {
    // created 1 ul element for the book
    var ulNewCreate = document.createElement('ul');
    var unOrdered = h1Location.appendChild(ulNewCreate);

    // created 4 li element for the book
    var liNewCreateId = document.createElement('li');
    var liNewCreateTitle = document.createElement('li');
    var liNewCreateLang = document.createElement('li');
    var liNewCreateAuthor = document.createElement('li');

    var listedTitle = ulNewCreate.appendChild(liNewCreateTitle);
    var listedAuthor = ulNewCreate.appendChild(liNewCreateAuthor);
    var listedLang = ulNewCreate.appendChild(liNewCreateLang);
    var listedId = ulNewCreate.appendChild(liNewCreateId);

    listedId.textContent = arr[i].id;
    listedTitle.textContent = arr[i].title;
    listedLang.textContent = arr[i].language;
    listedAuthor.textContent = arr[i].author;

    // ul and li styling
    listedId.style.color = 'brown';
    listedTitle.style.color = 'blue';
    listedLang.style.color = 'brown';
    listedAuthor.style.color = 'DarkGreen';
    listedTitle.style.fontSize = '25px';
    listedLang.style.fontSize = '15px';
    listedAuthor.style.fontSize = '20px';
    listedId.style.fontSize = '15px';
    unOrdered.style.backgroundColor = "LightSteelBlue";
    unOrdered.style.width = '60%';


    // created img element with 4 attribute
    var imgCreate = document.createElement("IMG");
    var locationImage = unOrdered.firstElementChild;
    var bookImage = unOrdered.insertBefore(imgCreate, locationImage);
    bookImage.setAttribute("src", image[i].imageSource);
    bookImage.setAttribute("width", "250");
    bookImage.setAttribute("height", "300");
    bookImage.setAttribute("alt", image[i].bookId);

  }
}

// function calling
displayBook(bookList);

