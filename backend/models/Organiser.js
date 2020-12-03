const mongoose = require("mongoose");
const Event = require("./Event");

const organisersSchema = new mongoose.Schema({
  company_name: String,
  email: String,
  address:String,
  password:String,
  mobile_no:Number,
  landline_no:Number,
  state:String,
  city:String,
  pincode:String,
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

module.exports = mongoose.model("Organiser", organisersSchema);
