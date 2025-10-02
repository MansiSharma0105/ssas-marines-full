// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose, { connectDB } from "./db.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

// --- Middlewares ---
app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173", // ✅ restrict to frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// helpful for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Root route ---
app.get("/", (req, res) => {
  res.send("🚢 SSAS Marine API is running. Use /api/contact or /health");
});

// --- Health route (DB + service check) ---
app.get("/health", async (req, res) => {
  try {
    // For MongoDB, check mongoose connection readyState
    const state = mongoose.connection.readyState; // 0 = disconnected, 1 = connected
    res.json({ status: state === 1 ? "ok" : "error", mongooseState: state });
  } catch (err) {
    res.status(500).json({ status: "error", error: err.message });
  }
});

// --- Contact routes ---
app.use("/api/contact", contactRoutes);

// --- Optional: serve built frontend later ---
// const distPath = path.join(__dirname, "../frontend/dist");
// app.use(express.static(distPath));
// app.get("*", (req, res) => res.sendFile(path.join(distPath, "index.html")));


// --- Test DB connection at startup ---
(async () => {
  try {
    await connectDB();
    console.log(`✅ MongoDB connection attempted`);
  } catch (e) {
    console.error("❌ Database connection failed:", e.message);
  }
})();

const PORT = process.env.PORT || 7000;

// Start server and attach an error handler so EADDRINUSE (port in use) is
// handled gracefully instead of throwing an unhandled exception.
const server = app.listen(PORT, () => {
  console.log(`🚢 SSAS Marine backend running at http://localhost:${PORT}`);
});

server.on("error", (err) => {
  if (err && err.code === "EADDRINUSE") {
    console.error(`❌ Port ${PORT} is already in use. Stop the process using the port or change PORT in .env and restart.`);
    console.error(`   On Windows (PowerShell):`);
    console.error(`     netstat -ano | findstr ":${PORT}"`);
    console.error(`     taskkill /PID <pid> /F`);
    process.exit(1);
  }
  console.error("Server error:", err);
  process.exit(1);
});
