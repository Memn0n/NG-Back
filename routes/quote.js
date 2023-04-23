const Quote = require("../models/Quote");
const router = require("express").Router();

router.post("/", async (req, res) => {
    const newQuote = new Quote(req.body);

    try{
        const savedQuote = await newQuote.save();
        res.status(200).json(savedQuote);
    }   catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;