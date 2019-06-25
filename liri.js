//Package Requring for proper app functionality
require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api")
var moment = require("moment");
var keys = require("./keys.js");

//initializng keys
var spotify = new Spotify(keys.spotify);
var omdbkey = keys.omdb;

//Store User input into variables for command and query
var command = process.argv[2];
var searchInput = process.argv[3];
// console.log(searchInput);

switch (command){
    case "concert-this":
        axios.get("https://rest.bandsintown.com/artists/" + searchInput + "/events?app_id=codingbootcamp")
        .then(function (response) {
            var data = response.data;

            console.log("------------------------------------------------------");
            for(var i = 0; i < data.length; i++){
                console.log("Venue: " + data[i].venue.name);
                console.log("Location: " + data[i].venue.city + ", " + data[i].venue.country);
                console.log("Time: " + moment(data[i].datetime).format("MM-DD-YYYY"));
                console.log("------------------------------------------------------");

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


            console.log("------------------------------------------------------");
            for(var i = 0; i < data.length; i++){
                console.log("Artist: " + data[i].artists[0].name);
                console.log("Track Title: " + data[i].name);
                console.log("Album Title: " + data[i].album.name);
                console.log("URL to Song: " + data[i].artists[0].external_urls.spotify);
                console.log("------------------------------------------------------");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        break;

    case "movie-this":
        axios.get("http://www.omdbapi.com/?apikey=" + omdbkey + "&t=" + searchInput)
        .then(function(response){
            data = response.data;
            console.log("------------------------------------------------------");
            console.log("Title: " + data.Title);
            console.log("Release Year: " + data.Year);
            console.log("IMDB: " + data.imdbRating);
            console.log("Rotten Tomatoes: " + data.Ratings[2].Value);
            console.log("Produced In: " + data.Country);
            console.log("Language: " + data.Language);
            console.log("Plot: " + data.Plot);
            console.log("Actors: " + data.Actors);
            console.log("------------------------------------------------------");

        })
        .catch(function(error){
            console.log(error);
        });
        break;
    case "do-what-it-says":
        fs.readFile('random.txt', "utf8", (err, data) => {
            if (err) throw err;
            dataArr = data.split(",");
            var doit = dataArr[0];
            var tothis = dataArr[1];

            switch (doit){
                case "concert-this":
                    axios.get("https://rest.bandsintown.com/artists/" + searchInput + "/events?app_id=codingbootcamp")
                        .then(function (response) {
                            var data = response.data;
                
                            console.log("------------------------------------------------------");
                            for(var i = 0; i < data.length; i++){
                                console.log("Venue: " + data[i].venue.name);
                                console.log("Location: " + data[i].venue.city + ", " + data[i].venue.country);
                                console.log("Time: " + moment(data[i].datetime).format("MM-DD-YYYY"));
                                console.log("------------------------------------------------------");
                
                            }
                        })
                    .catch(function (error) {
                        // handle error
                        console.log("error occurred: " + error);
                    });
                    break;
                case "spotify-this-song":
                    spotify
                    .search({type: 'track', query: tothis, limit: 5})
                    .then(function(response) {
                        var data = response.tracks.items;
            
            
                        console.log("------------------------------------------------------");
                        for(var i = 0; i < data.length; i++){
                            console.log("Artist: " + data[i].artists[0].name);
                            console.log("Track Title: " + data[i].name);
                            console.log("Album Title: " + data[i].album.name);
                            console.log("URL to Song: " + data[i].artists[0].external_urls.spotify);
                            console.log("------------------------------------------------------");
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    break;
            
                case "movie-this":
                    axios.get("http://www.omdbapi.com/?apikey=" + omdbkey + "&t=" + tothis)
                    .then(function(response){
                        data = response.data;
                        console.log("------------------------------------------------------");
                        console.log("Title: " + data.Title);
                        console.log("Release Year: " + data.Year);
                        console.log("IMDB: " + data.imdbRating);
                        console.log("Rotten Tomatoes: " + data.Ratings[2].Value);
                        console.log("Produced In: " + data.Country);
                        console.log("Language: " + data.Language);
                        console.log("Plot: " + data.Plot);
                        console.log("Actors: " + data.Actors);
                        console.log("------------------------------------------------------");
            
                    })
                    .catch(function(error){
                        console.log(error);
                    });
                    break;
                }
        });
        break;
    }