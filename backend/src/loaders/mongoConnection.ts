import mongoose from "mongoose";
import { mongoConfig } from "../config/MongoConfig";
export const mongoConnection = async () => {
  try {
    await mongoose.connect(mongoConfig.uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};
