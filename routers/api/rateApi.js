const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const axios = require("axios");

//get request

router.get("/rates", (req, res) => {
    const base = req.query.base;
    const currency = req.query.currency;
    let currencyArray;

    //checks if the user supplies a currency query
    if (currency != null) {
        currencyArray = currency.split(",");
    } else {
        currencyArray = [];
    }

    axios
        .get(`https://api.exchangeratesapi.io/latest?base=${base}`)
        .then((body) => {
            const rates = body.data.rates;

            //map throug the rate objects and returns key-values that matches the user currency query
            if (currencyArray.length != 0) {
                const filtered = Object.keys(rates)
                    .filter((key) => currencyArray.includes(key))
                    .reduce((obj, key) => {
                        obj[key] = rates[key];
                        return obj;
                    }, {});

                body.data.rates = filtered;
                const transformedData = {
                    results: {
                        base: body.data.base,
                        date: body.data.date,
                        rates: body.data.rates,
                    },
                };

                body.data = transformedData;
            }

            return res.json(body.data);
        })
        .catch((err) => {
            const errResponse = {
                error: {
                    statusCode: err.response.status,
                    message: err.response.statusText,
                    errorData: err.response.data,
                },
            };
            return res.json(errResponse);
        });
});

module.exports = router;
