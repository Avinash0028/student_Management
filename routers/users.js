const express = require("express"),
    randomString = require("randomstring"),
    moment = require("moment"),
    jwt = require("jsonwebtoken"),
    bcrypt = require("bcryptjs"),
    router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("Running Users");
});

module.exports = router;