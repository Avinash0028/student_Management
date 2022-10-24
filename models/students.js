const config = require("config"),
    bcrypt = require("bcryptjs"),
    jwt = require("jsonwebtoken"),
    mongoose = require("mongoose"),
    schema = mongoose.Schema,
    uri = ``;

mongoose.connect(uri, (err) => {
    if (!err) {
        console.log("students Connection Successful");
    } else {
        console.log("students Connection Failed");
    }
});

const studentsSchema = new schema({
    id : { type: String, require: true, unique: true},
    firstName : { type: String, require: true},
    middleName : { type: String,},
    lastName : { type: String, require: true},
    email : { type: String, require: true, unique: true},
    phone : { type: String, require: true, unique: true},
    rollNo : { type: Number, require: true, unique: true},
    EnrollNo : { type: Number, require: true, unique: true},
    department : { type: String, require: true},
    sem : { type: Number, require: true},
    gender : { type: String, require: true},
    password : { type: String, require: true},
    createdDate : { type: Number, require: true},
    updatedDate : { type: Number}
});

const students = mongoose.model("students", studentsSchema, "students");
module.exports = students;