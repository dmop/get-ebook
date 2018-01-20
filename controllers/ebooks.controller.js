"use strict";

const config = require("../config/config");
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

exports.home = function(req, res) {
  const htmlPath = path.join(__dirname, "..", "index.html");
  fs.readFile(htmlPath, "utf8", function(err, html) {
    res.status(400).send(html);
  });
};

exports.getEbookLink = function(req, res) {
  if (!req.url) {
    res.status(400).json({ message: "Link can not be empty" });
  }

  const url = req.url.slice(5);

  axios
    .get(url)
    .then(function(response) {
      const html = response.data;

      const $ = cheerio.load(html);
      let parsedResults = [];

      $(".su-button-center").each(function(i, element) {
        let a = $(this).children();
        let url = a.attr("href");
        let type = a.children().text();

        let metadata = {
          type: type,
          url: url
        };
        // Push meta-data into parsedResults array
        parsedResults.push(metadata);
      });

      res.status(200).send(parsedResults);
    })
    .catch(function(error) {
      res.status(400).json({ message: "Error" });
      console.log(error);
    });
};
