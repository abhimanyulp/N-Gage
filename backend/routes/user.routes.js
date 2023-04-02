const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../model/user.model");
const { auth } = require("../middleware/auth.middlware");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//Registeration
userRouter.post("/register", async (req, res) => {
    const { name, email, pass, mobile, website, plan } = req.body;
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            // Store hash in your password DB.
            const user = new UserModel({ name, email, pass: hash,  mobile, website, plan });
            await user.save()
            res.status(200).send({ "msg": "Registeration has been done!" });
        });

    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})


//Login
userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.findOne({ email })

        if (user) {

            bcrypt.compare(pass, user.pass, (err, result) => {
                if (result) {
                    res.status(200).send({ "msg": "Login Successful", "email": user.email, "token": jwt.sign({ "userID": user._id }, "masai") })
                } else {
                    res.status(400).send({ "msg": "Wrong Credentials" })
                }
            });
        }

    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})


//Update user
userRouter.patch("/update/:emailID", async (req,res)=>{
    const {emailID} = req.params;
    const payload = req.body;
    try{
        await UserModel.findOneAndUpdate({email:emailID},payload)
        res.status(200).send({"msg":"User has been updated"})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})


//Read User(s)
userRouter.get("/:emailID", auth, async (req,res)=>{
    const {emailID} = req.params;
    try{
        const user = await UserModel.findOne({ email:emailID });
        res.status(200).send(user);
    }catch(err){
        res.status(400).send({"msg":err.message});
    }
})




module.exports = { userRouter }