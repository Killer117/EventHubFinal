const express = require("express");
const router = express.Router();

const Organiser = require("../models/Organiser");

router.post("/register", function (req, res) {
  Organiser.find({ email: req.body.email }, function (err, foundOrganisers) {
    if (foundOrganisers.length === 0) {
      const newOrganiser = new Organiser({
        company_name: req.body.name,
        email: req.body.email,
        address:req.body.address,
        password:req.body.password,
        mobile_no:req.body.mobile,
        landline_no:req.body.landline,
        state:req.body.state,
        city:req.body.city,
        pincode:req.body.pincode
      });

      newOrganiser.save();
      res.send(true);

    } else {
      res.send("Organiser already registered");
    }
  });
});


module.exports = router;
