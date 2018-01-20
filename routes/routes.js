"use strict";

const ebooks = require("../controllers/ebooks.controller.js");

module.exports = function(app) {
  // define a simple route
  app.get("/", ebooks.home);

  app.get("/search/:name", ebooks.searchEbook);

  app.get("/ebook/:url*", ebooks.getEbookLink);

  app.get("/news", ebooks.searchNewEbooks);
};
