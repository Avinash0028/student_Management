// Requiring All Packages
const express = require("express"),
    config = require("config"),
    bodyParser = require("body-parser"),
    handlebars = require("express-handlebars"),
    moment = require("moment"),
    cookieParser = require("cookie-parser"),
    app = express();

// connecting models files
const usersModel = require("./models/users"),
    studentsModel = require("./models/students"),
    facultiesModel = require("./models/faculties");

// connecting routers files
const usersRouter = require("./routers/users"),
    studentsRouter = require("./routers/students"),
    facultiesRouter = require("./routers/faculties");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Defining Public Dir As A Static
app.use(express.static("./public"));

// Setting The View Engine (Handlebars)
app.set("view engine", "hbs");
app.engine("hbs", handlebars({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));


app.get("/", (req, res) => {
    res.status(200).render("dashboard", { layout: "dashboardLayout" });
});
app.get("/table", (req, res) => {
    res.status(200).render("table", { layout: "tableLayout" });
});
app.get("/login", (req, res) => {
    res.status(200).render("login", { layout: "loginLayout" });
});

// Setting Routes For Routers File
app.use("/users", usersRouter);
app.use("/students", studentsRouter);
app.use("/faculties", facultiesRouter);

// Configuring The app
app.listen(config.get("App.port"), () => {
    console.log(`http://${config.get("App.host")}:${config.get("App.port")}`);
});