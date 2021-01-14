const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//init express
const app = express();

//this imports our exchangeRate api file in our router
const ExchangeRate = require("./routers/api/rateApi");

//allow Post request from client
app.use(bodyParser.json());

//imports the key
const db = require("./config/keys").mongoURI;

//connects the db to mongodb
mongoose
    .connect(db)
    .then(() => console.log("db connected to mongodb"))
    .catch((err) => console.log(err));

//this means any request to api/ExchangeRate should use
//the route in exchangeRateApi file
app.use("/api/rates", ExchangeRate);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port${PORT}`);
});
