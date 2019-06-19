//Package Requring for proper app functionality
require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api")
var keys = require("./keys.js");

//initializng spotify API with keys
var spotify = new Spotify(keys.spotify);

//Store User input into variables for command and query
var command = process.argv[2];
var searchInput = process.argv[3];
// console.log(searchInput);

switch (command){
    case "concert-this":
        
        break;
    case "spotify-this":
        
        break;

    case "movie-this":
        
        break;

}