var fs = require("fs");
var axios = require("axios");
var movie = "movie-this";

var MOVIE = function () {
    
    var divider = "\n------------------------------------------------\n\n";
    this.findMovie = function (movie) {
        var URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        axios.get(URL)
            .then(function (response) {
                var movieRespData = response.data;
                var movieData = [
                    "Title: " + movieRespData.Title,
                    "Year: " + movieRespData.Year,
                    "Imdb Rating: " + movieRespData.imdbRating,
                    "Website: " + movieRespData.Website,
                    "Country: " + movieRespData.Country,
                    "Language: " + movieRespData.Language,
                    "Plot: " + movieRespData.Plot,
                    "Actors: " + movieRespData.Actors,
                ].join("\n");
                fs.appendFile("log.txt", movieData + divider, function (err) {
                    if (err) throw err;
                    console.log(movieData);
                })
            })
            .catch(function (err) {
                console.log(err);
            })
    };
    
}
module.exports = MOVIE;