const express = require("express");
const app = express();
const mustacheExpress = require('mustache-express');
const path = require("path"); // Required for finding locations of files and directories stemming from this file

const Model = require('./app.model.js');

app.engine("mustache", mustacheExpress());
app.set('view engine', 'mustache');
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public"))); // Public file best way to contain static files such as CSS, JS, and images

app.use( express.urlencoded({ extended: false }) ); // Middleware to parse form data

Model.makeConnection();

app.get("/addGameList", async function(req, res) {
    const gameArray = await Model.displayAllRecords();

    res.render("main", { games: gameArray, addGame: true });
});

app.post('/addGame', async function(req, res) {
    await Model.addGame( 
        req.body.title, 
        req.body.personal_rating, 
        req.body.image, 
        req.body.opinion, 
        req.body.number_times_played, 
        req.body.first_played, 
        req.body.total_hours, 
        req.body.favourite
    );

    const gameArray = await Model.displayAllRecords();
    res.render("main", { games: gameArray });
});

app.get("/", async function(req, res) {
    const gameArray = await Model.displayAllRecords();

    res.render("main", { games: gameArray });
});

app.listen(3000, () => {
    console.log("Server listening on port 3000!")
}); 