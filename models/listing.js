const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description:{ type : String},
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/a-group-of-people-walking-down-a-street-next-to-tall-buildings-FWMLso4ejtQ",
    set: (v) =>
      v === "" ? "https://images.unsplash.com/photo-1721188092458-02476f779c66?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
  },
  price: {
    type : Number 
  },

  location: {
    type : String
  },

  country: {
    type : String,
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;