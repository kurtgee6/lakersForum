//Require griarte fasion dependencies
const express = require('express');
const request = require('request');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').load();
const routes = require('./routes');
const PORT = process.env.PORT || 3005;

//The code below allows our app to the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json' }))

// Serve up static assets
app.use(express.static("client/build"));

// Require our DB Models users
const models = require("./models");

app.use(routes);

//Sync Database
models.sequelize.sync().then(function() {
    
        console.log('Nice! Database looks fine')
    
    }).catch(function(err) {
    
        console.log(err, "Something went wrong with the Database Update!")
    
});


app.listen(PORT, function(err) {

    if (!err) {
        console.log("")
        console.log("------------------ CONNECTION -------------------")
        console.log("Listening on port: " + PORT);
        console.log("-------------------------------------------------")
        console.log("")        
        
    }
    else console.log(err)

});