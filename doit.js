var fs = require("fs");


var doit = "do-what-it-says";

var DOIT = function () {
    this.findIt = function (doit) {
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (!error) {
                doWhatItSaysResults = data.split(",");
                (doWhatItSaysResults[0], doWhatItSaysResults[1]);
            } else {
                console.log("Error occurred" + error);
            }
            console.log(data);
            log(doWhatItSaysResults);
        });
    }
}
function log(logResults) {
    fs.appendFile("log.txt", logResults, (error) => {
        if (error) {
            throw error;
        }
    });
}
module.exports = DOIT;