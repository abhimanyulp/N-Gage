const express = require("express");
const postRouter = express.Router();
const { PostModel } = require("../model/post.model");
const { auth } = require("../middleware/auth.middlware");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


postRouter.get("/byuser", auth, async (req, res) => {
    const token = req.headers.authorization.split(" ")[1]
    const decoded = jwt.verify(token, "masai")

    try {
        if (decoded.userID) {
            const notes = await PostModel.find({ "userID": decoded.userID })
            res.status(200).send(notes);
        } else {
            res.status(400).send({ "msg": "No Notes created by this user" })
        }

    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})



//get all posts
postRouter.get("/", async (req, res) => {
    try {
        const posts = await PostModel.find()
        res.status(200).send(posts);
        
    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})


//add post
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