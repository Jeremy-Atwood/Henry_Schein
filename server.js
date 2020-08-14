// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        name: "Example",
        phone: "555-1234",
        email: "abc@123.com",
        id: "4567"
    }
]

/**
 * Routes
 */

 app.get("/", function(req, res){
     res.sendFile(path.join(__dirname, "index.html"));
 });

 app.get("/tables", function(req, res){
    res.sendfile(path.join(__dirname, "viewTable.html"));
 });

 app.get("/reservation", function(req, res){
    res.sendfile(path.join(__dirname, "reservation.html"));
 });

 app.post("/add-table", function(req, res) {

 })