"use strict";

const ebooks = require("../controllers/ebooks.controller.js");

module.exports = function(app) {
  // define a simple route
  app.get("/", ebooks.home);

  app.get("/new/:url*", ebooks.getEbookLink);
};
