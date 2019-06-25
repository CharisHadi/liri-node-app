//Package Requring for proper app functionality
require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api")
var moment = require("moment");
var keys = require("./keys.js");

//initializng spotify API with keys
var spotify = new Spotify(keys.spotify);

//Store User input into variables for command and query
var command = process.argv[2];
var searchInput = process.argv[3];
// console.log(searchInput);

switch (command){
    case "concert-this":
        axios.get("https://rest.bandsintown.com/artists/" + searchInput + "/events?app_id=codingbootcamp")
        .then(function (response) {
            var data = response.data;
            //console.log(data[0]);
            for(var i = 0; i < data.length; i++){
                console.log("Venue: " + data[i].venue.name);
                console.log("Location: " + data[i].venue.city + ", " + data[i].venue.country);
                console.log("Time: " + data[i].datetime);
                console.log("------------------------------------------------------");
                //console.log(moment().format(data[i].datetime, "MM-DD-YYYY"));

            }
        })
        .catch(function (error) {
            // handle error
            console.log("error occurred: " + error);
        });
        break;
    case "spotify-this-song":
        spotify
        .search({type: 'track', query: searchInput, limit: 5})
        .then(function(response) {
            var data = response.tracks.items;

            for(var i = 0; i < data.length; i++){
                console.log("Artist: " + data[i].artists[0].name);
                console.log("Track Title: " + data[i].name);
                console.log("Album Title: " + data[i].album.name);
                console.log("URL to Song: " + data[i].artists[0].external_urls.spotify);
                console.log("------------------------------------------------------")
            }
        })
        .catch(function (error) {
            console.log(error)
        });
        break;

    case "movie-this":
        
        break;
    case "do-what-it-says":
        break;

}