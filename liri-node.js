var MOVIE = require("./liri-movie.js");
var SPOTIFY = require("./liri.js");
var DOIT = require("./doit");
var mySPOTIFY = new SPOTIFY();
var myMOVIE = new MOVIE();
var doWhatItSays = new DOIT;
var searchType = process.argv[2];
var searchTerm = process.argv.slice(3).join(" ").toLowerCase();


///incase user doesnt put in search term we place our own search.  Reminder error will never run this way!

// if(!searchType) {
//     searchType = "movie";
// }
// if(!searchTerm) {
//     searchTerm = "Game of Thrones";
// }
// if (!searchTerm) {
//     searchTerm = "Artist: Drake \nSong: 'Passionfruit' \nAlbum: 'More Life' \nPreview Link: 'https://open.spotify.com/track/5mCPDVBb16L4XQwDdbRUpz'"
// }
/////////////////////////////////////////////////////
if(searchType === "movie-this") {
    console.log("Searching for movie");
    myMOVIE.findMovie(searchTerm);
}
else if (searchType === "spotify-this-song") {
    console.log("Searching for song");
    mySPOTIFY.findSong(searchTerm);
}
else if (searchType === "do-what-it-says") {
    console.log("Searching for read file");
    doWhatItSays.findIt(searchTerm);
}
else {
    console.log("Error: Please enter movie or song for the search type");
}
console.log(searchType + " " + searchTerm);