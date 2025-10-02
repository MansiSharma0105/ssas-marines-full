
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || process.env.DB_URL || "";

async function connectDB() {
  if (!MONGODB_URL) {
    console.warn("⚠️  MONGODB_URL is not set in .env. MongoDB will not connect.");
    return;
  }
  try {
    // keep options minimal and compatible
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ Connected to MongoDB`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
}

export { connectDB };
export default mongoose;

