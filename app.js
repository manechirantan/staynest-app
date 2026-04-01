import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
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
import Listing from "./models/listing.js";


Listing.insertMany(data);

app.listen(port, () => {
  console.log("server started easily on port 3000");
});
