const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExchangeRateModel = new Schema({
    results: {
        base: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        rate: {
            GBP: {
                type: Number,
            },
            USD: {
                type: Number,
            },
            EUR: {
                type: Number,
            },
        },
    },
});

module.exports = ExchangeRate = mongoose.model(
    "ExchangeRate",
    ExchangeRateModel
);
