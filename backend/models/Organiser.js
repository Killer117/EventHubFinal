const mongoose = require("mongoose");

const organisersSchema = new mongoose.Schema({
  company_name: String,
  email: String,
  contact_no: Number,
  website_link: String,
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

module.exports = mongoose.model("Organiser", organisersSchema);
