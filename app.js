import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Listing from "./models/listing.js";
dotenv.config({ quiet: true });
const port = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const app = express();
async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("server started easily on port 3000");
});
