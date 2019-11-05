// ***************************
// SETUP
// ***************************

console.log("app.js server is running");

// import express module
var express = require("express");
// set express to variable
var app = express();


// set listen port
app.listen(8080, function(){
    console.log("Server Running");
});

// set Styles location
app.use(express.static("public"));


// ***************************
// ROUTES
// ***************************

// homepage 
app.get("/", function(req, res){
    // render homepage template
    res.render("home.ejs");
});

// friends page. displays friends and add friend form
app.get("/friends", function(req, res){
    
    // array of friends
    var friends = [
        "Tony",
        "Jake",
        "Paul",
        "Jones",
        "Davis",
        "Terry"
        ];
        
    // render friends template
    res.render("friends.ejs", {friends: friends});
    
});

// "add friend" form endpoint
app.post("/addfriend", function(req, res){
    console.log(req.body)
    res.send("Data Received");
});