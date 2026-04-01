import dotenv from 'dotenv'
import mongoose from "mongoose";
import Listing from "../models/listing.js";
import sampleListings from "./data.js";
dotenv.config({path: "../.env", quiet: true });
const MONGO_URL = process.env.MONGO_URL;
async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then(() => {
    console.log("connected to database");
    return initDb();
  })
  .catch((err) => console.log(err));

const initDb = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(sampleListings);
};

