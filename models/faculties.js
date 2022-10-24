const config = require("config"),
    bcrypt = require("bcryptjs"),
    jwt = require("jsonwebtoken"),
    mongoose = require("mongoose"),
    schema = mongoose.Schema,
    uri = ``;

mongoose.connect(uri, (err) => {
    if (!err) {
        console.log("faculties Connection Successful");
    } else {
        console.log("faculties Connection Failed");
    }
});

const facultiesSchema = new schema({
    id : { type: String, require: true, unique: true},
    firstName : { type: String, require: true},
    middleName : { type: String,},
    lastName : { type: String, require: true},
    email : { type: String, require: true, unique: true},
    phone : { type: String, require: true, unique: true},
    department : { type: String, require: true},
    gender : { type: String, require: true},
    password : { type: String, require: true},
    createdDate : { type: Number, require: true},
    updatedDate : { type: Number}
});

const faculties = mongoose.model("faculties", facultiesSchema, "faculties");
module.exports = faculties;