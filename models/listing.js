import mongoose from "mongoose";
let schema = mongoose.Schema;

let listingSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    filename: String,
    url: {
      type: String,
      default: "https://wallpapershome.com/images/pages/pic_h/1128.jpg",
      set: (v) =>
        v === "" ? "https://wallpapershome.com/images/pages/pic_h/1128.jpg" : v,
    },
  },
  price: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
