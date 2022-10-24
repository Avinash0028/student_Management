const express = require("express"),
    config = require("config"),
    bodyParser = require("body-parser"),
    handlebars = require("express-handlebars"),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

app.get("/", (req, res) => {
    res.status(200).send("Running....");
});

app.listen(config.get("App.port"), () => {
    console.log(`http://${config.get("App.host")}:${config.get("App.port")}`);
});