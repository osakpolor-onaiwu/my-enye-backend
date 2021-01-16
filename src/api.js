const express = require("express");
const bodyParser = require("body-parser");
const serverless = require("serverless-http");

//init express
const app = express();

//this imports our exchangeRate api file in our router
const ExchangeRate = require("../routers/api/rateApi");

//allow Post request from client
app.use(bodyParser.json());

//imports the key

//connects the db to mongodb

app.use("/.netlify/functions/api", ExchangeRate);

const PORT = process.env.PORT || 5000;

module.exports.handler = serverless(app);

app.listen(PORT, () => {
    console.log(`Server started on port${PORT}`);
});
