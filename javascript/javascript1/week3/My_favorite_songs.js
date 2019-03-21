// My favorite songs

var songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
];

var myPlaylist = [];
var position;

// constructor for song object
function song(songId, title, artist) {
  this.songId = songId;
  this.title = title;
  this.artist = artist;
}

// function to add new song object to songDatabase
function addSongToDatabase(song) {
  var fav = new Object();
  fav.songId = song.songId;
  fav.title = song.title;
  fav.artist = song.artist;
  songDatabase.push(fav);
}

//function to get the song object information using song's title
function getSongByTitle(title) {
  var songTitle = title;
  var databaseLength = songDatabase.length;
  for (i = 0; i < databaseLength; i++) {
    if (songDatabase[i].title === songTitle) {
      position = i;
      console.log(songDatabase[i]);
      return position;
      break;
    }
  }
  console.log("Title do not match");
  return;
}

// adding songs from songDatabase to myPlayList
function addSongToMyPlaylist(title) {
  var mySongTitle = title;
  getSongByTitle(mySongTitle);
  addSong(songDatabase[position]);
  function addSong(song) {
    var fav = new Object();
    fav.songId = song.songId;
    fav.title = song.title;
    fav.artist = song.artist;
    myPlaylist.push(fav);
  }
}

// fuzzy user searching for song using title string
function fuzzyUser(searchString) {
  for (i = 0; i < songDatabase.length; i++) {
    var fuzzNum = fuzzySearch(searchString, songDatabase[i].title);
    if (fuzzNum)
      console.log(songDatabase[i]);
  }
  return;
}
const fuzzySearch = (searchString, origString) => {
  return searchString.split(' ').reduce((a, b) => { return a * origString.includes(b); }, 1);
}


// created a new song object
var song1 = new song(5, "Hello Hello", "udit");

console.log("Adding new Song to the songDatabase");
addSongToDatabase(song1);
console.log(songDatabase);

console.log("Getting song desciption from songDatabase using song title");
getSongByTitle('3 nails in wood');

console.log("I forgot the song title it was like baby");
getSongByTitle('baby');

console.log("Adding song from songDatabase to myPlaylist");
addSongToMyPlaylist('3 nails in wood');
console.log(myPlaylist);
console.log("For fuzzy User - title is : 3 nails i wood");
fuzzyUser("3 nails i wood");
