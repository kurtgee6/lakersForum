//Require griarte fasion dependencies
const express = require('express');
const request = require('request');
const app = express();

const session = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').load();
const PORT = process.env.PORT || 3005;

//The code below allows our app to the body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

app.get('/', function(req, res) {
    
        res.send('Welcome to Lakers Forum!');
    
    });

app.listen(PORT, function(err) {

    if (!err) {
        console.log("")
        console.log("------------------ CONNECTION -------------------")
        console.log("Listening on port: " + PORT);
        console.log("")
        
    }
    else console.log(err)

});