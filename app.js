import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Listing from "./models/listing.js";
import path from "path";
import methodoverride from "method-override";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
dotenv.config({ quiet: true });
const port = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));

//route to show all listings
app.get("/listing", async (req, res) => {
  let listings = await Listing.find({});
  res.render("./listings/index.ejs", { listings });
});

//route to show create listing
app.get("/listing/new", (req, res) => {
  res.render("./listings/new.ejs");
});

//route to show all listings in details
app.get("/listing/:id", async (req, res) => {
  let { id } = req.params;
  const listings = await Listing.findById(id);
  res.render("./listings/show.ejs", { listings });
});

app.post("/listing", async (req, res) => {
  let newlist = await new Listing(req.body.listing)
  newlist.save();
  res.redirect("/listing");
});

app.listen(port, () => {
  console.log("server started easily on port 3000");
});
