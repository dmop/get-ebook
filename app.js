"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");
const port = process.env.PORT || 8080;
// create express app
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(morgan("tiny"));

require("./routes/routes.js")(app);

// listen for requests
app.listen(port, function() {
  console.log("Server is listening on port " + port);
});
