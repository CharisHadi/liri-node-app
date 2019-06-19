require("dotenv").config();


var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api")
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
console.log(command);

switch (command){
    case "concert-this":
        
        break;
    case "spotify-this":
        
        break;

    case "movie-this":
        
        break;

}