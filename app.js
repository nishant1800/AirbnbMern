const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/test";

main()
    .then(() => {
        console.log("connect to DB");
    })
    .catch((err) => {
        console.log(err);
    });

    async function main() {
        await mongoose.connect(MONGO_URL);
    }


app.get("/", (req, res) => {
    res.send("Hii am root");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});