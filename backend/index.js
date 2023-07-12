const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes")
const { postRouter } = require("./routes/post.routes")


const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Welcome to N-Gage")
})

app.use("/users", userRouter);
app.use("/posts", postRouter);


app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Not able to connect to MongoDB");
        console.log(err);
    }
    console.log(`Server is running at port ${process.env.port}`);
})