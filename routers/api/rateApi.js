const { json } = require("body-parser");
const express = require("express");
const router = express.Router();

//this brings in our ExchangeRate model
const ExchangeRate = require("../../models/rate");

//get request

router.get("/", (req, res) => {
    let base = req.query.base;
    let currency = req.query.currency;

    ExchangeRate.find({
        "results.base": base,
    })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

//post
router.post("/", (req, res) => {
    const newBase = new ExchangeRate({
        results: req.body.results,
    });

    newBase
        .save()
        .then((data) => {
            res.json(data);
            res.status(201).end();
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
