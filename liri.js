require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var inquirer = require("inquirer");

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);