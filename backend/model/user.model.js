const mongoose = require("mongoose");


//user schema
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    pass: String,
    mobile: Number,
    website: String,
    plan: String
},{
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema);

module.exports = {UserModel};