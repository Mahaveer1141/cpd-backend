import mongoose from "mongoose";
import config from "./configuration";

export async function startDatabaseConnection() {
  const MONGO_URI = config.mongo.MONGO_URI;
  try {
    await mongoose.connect(MONGO_URI);
    console.log("database connected successfully");
  } catch (err) {
    console.log("database connection error: ", err);
  }
}
