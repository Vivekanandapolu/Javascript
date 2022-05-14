import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000
app.use(express.json());

const username = "6303524713";
const password = "chinnapolu";
const cluster = "vivekcluster.rvpxq.";
const dbname = "test";

mongoose.connect("mongodb+srv://6303524713:chinnapolu@vivekcluster.rvpxq.mongodb.net/test",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});


app.listen(port, () => {
    console.log(`This server is running on the port no: ${port}..`);
})