const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://images.pexels.com/photos/21005729/pexels-photo-21005729/free-photo-of-palm-tree-in-front-of-the-sea-gadabout-hotel-in-puducherry.jpeg?auto=compress&cs=tinysrgb&w=600",
    set: (v) =>
      v === ""
        ? "https://images.pexels.com/photos/21005729/pexels-photo-21005729/free-photo-of-palm-tree-in-front-of-the-sea-gadabout-hotel-in-puducherry.jpeg?auto=compress&cs=tinysrgb&w=600"
        : v,
  },
  price: Number,
  location: String,
  state: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;