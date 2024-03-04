import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = () => mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() =>console.log("MongoDB connected successfully!"))
  .catch((err) => console.log(`Error happened: ${err}`))

export default connectDB;
