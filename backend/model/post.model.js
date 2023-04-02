const mongoose = require("mongoose");


//POST Schema
const postSchema = mongoose.Schema({
    name: String,
    title: String,
    body: String,
    userID: String
},{
    versionKey:false
})

const PostModel = mongoose.model("post", postSchema);

module.exports = {PostModel};