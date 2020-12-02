const express = require("express");
const router = express.Router();

const Organiser = require("../models/Organiser");

router.post("/register", function (req, res) {
  User.find({ email: req.body.email }, function (err, foundOrganisers) {
    if (foundOrganisers.length === 0) {
      const newOrganiser = new Organiser({
        company_name: req.body.name,
        email: req.body.email,
        contact_no: req.body.mobile,
        website_link: req.body.url,
      });

      newOrganiser.save();
      res.send(true);
    } else {
      res.send("Organiser already registered");
    }
  });
});

router.post("/login", function (req, res) {});

module.exports = router;
