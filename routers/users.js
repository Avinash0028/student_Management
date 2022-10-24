const express = require("express"),
    randomString = require("randomstring"),
    moment = require("moment"),
    jwt = require("jsonwebtoken"),
    bcrypt = require("bcryptjs"),
    router = express.Router();

const usersModel = require("../models/users"),
    studentsModel = require("../models/students"),
    facultiesModel = require("../models/faculties");

router.get("/", (req, res) => {
    res.status(200).send("Running Users");
});

router.get("/userslist", (res, req) => {
    usersModel.find({}).sort({ updatedDate : -1 }).lean().exec((err, result) => {
        if (!err && result) {
            result = result.map((e) => {
                e[createdDate] = moment().format('MMMM Do YYYY, h:mm a');
                e[updatedDate] = moment().format('MMMM Do YYYY, h:mm a');
                return e;
            });

            const data = {
                users : result
            }

            res.status(200).render('table', { layouts : "tableLayout", data });
        } else {
            res.status(500).render('error', err);
        }
    })
});

router.post("/register", (req, res) => {
    const cpassword = req.body.cpassword,
    data = {
        id : randomString.generate({length : 33, charset : "alphanumeric"}),
        firstName : req.body.firstName,
        middleName : req.body.middleName,
        lastName : req.body.lastName,
        email : req.body.email,
        phone : req.body.middleName,
        password : req.body.middleName,
        createdDate : moment().unix(),
        updatedDate : moment().unix()
    }

    const newUser = new usersModel(data);

    newUser.save((err) => {
        if (!err && result) {
            //success
            response.status(200);
            response.json({ "message": "Success", "Data": result });
        } else {
            //failure
            response.status(500);
            response.json({ "message": "Failure", "Data": err });
        }
    });
});

module.exports = router;