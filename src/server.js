const express = require("express");
const app = express();
const mustacheExpress = require('mustache-express');
const path = require("path"); // Required for finding locations of files and directories stemming from this file

app.engine("mustache", mustacheExpress());
app.set('view engine', 'mustache');
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public"))); // Public file best way to contain static files such as CSS, JS, and images

app.get("/", function(req, res) {
        res.render("main", {title: "Testing Purposes Templating!"});
});

app.listen(3000, () => {
    console.log("Server listening on port 3000!")
}); 