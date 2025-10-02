// Migration helper: create collection indexes in MongoDB corresponding to the
// previous MySQL schema for `contact_messages`.
//
// Usage: set MONGODB_URL in backend/.env, then run:
//   node migrations/migrate_sql_to_mongo.js
//
import dotenv from "dotenv";
import mongoose from "mongoose";
import ContactMessage from "../models/ContactMessage.js";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || "";

async function run() {
  if (!MONGODB_URL) {
    console.error("❌ MONGODB_URL is not set in .env. Please set it and re-run the script.");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB — creating indexes for contact_messages...");

    // Use the model's collection to create indexes that mirror the SQL schema
    // Index on created_at (descending) and email (ascending)
    await ContactMessage.collection.createIndex({ created_at: -1 }, { name: "idx_created_at" });
    await ContactMessage.collection.createIndex({ email: 1 }, { name: "idx_email" });

    console.log("✅ Indexes ensured: idx_created_at, idx_email");
  } catch (err) {
    console.error("❌ Migration failed:", err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run();
