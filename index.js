const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const quoteRoute = require("./routes/quote");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnection sucessful"))
.catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/quote", quoteRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("BACKEND SERVER IS RUNNING!");
});
