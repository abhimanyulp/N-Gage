const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const postRouter = express.Router();
const { PostModel } = require("../model/post.model");
const { auth } = require("../middleware/auth.middlware");



//Get all posts
postRouter.get("/", async (req, res) => {
    try {
        const posts = await PostModel.find()
        res.status(200).send(posts);
        
    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})


//Add post
postRouter.post("/add", auth, async (req, res) => {
    try {
        const post = new PostModel(req.body);
        await post.save()
        res.status(200).send({ "msg": "Post has been added" });

    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})



module.exports = { postRouter }