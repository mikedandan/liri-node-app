require('dotenv').config();

var fs = require("fs");
var keys = require("./keys");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var song = "spotify-this-song";

//Spotify function 
var SPOTIFY = function () {
    this.findSong = function (song) {
        spotify.search({ type: "track", query: song }, function (err, data) {
            if (!err) {
                var songInfo = data.tracks.items;
                // console.log(data);
                for (var i = 0; i < 5; i++) {
                    if (songInfo[i] != undefined) {
                        var spotifyResults = [
                            ("\n"),
                            "Artist: " + songInfo[i].artists[0].name,
                            "Song: " + songInfo[i].name,
                            "Album: " + songInfo[i].album.name,
                            "Preview Link: " + songInfo[i].preview_url,
                        ].join("\n");

                        console.log(spotifyResults);

                        log(spotifyResults); // // calling log function to print results to log.txt file
                    }
                }
            } else {
                console.log("Error :" + err);
                return;
            }
        });
    };
}
////function to log results in txt file///
function log(logResults) {
    fs.appendFile("log.txt", logResults, (error) => {
        if (error) {
            throw error;
        }
    });
}
module.exports = SPOTIFY;
