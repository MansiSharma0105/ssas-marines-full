// backend/routes/contact.js
import { Router } from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = Router();

/** --- Helpers --- */
function s(val) {
  return String(val ?? "").trim();
}
function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validMobile(m) {
  return /^\d{7,15}$/.test(m);
}

// --- GET all contact messages ---
router.get("/", async (_req, res) => {
  try {
    const rows = await ContactMessage.find().sort({ created_at: -1 }).lean();
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error("GET /api/contact error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// --- POST create a new contact message ---
router.post("/", async (req, res) => {
  try {
    const { name, email, mobile, company, subject, designation, requirement } = req.body || {};

    const data = {
      name: s(name),
      email: s(email).toLowerCase(),
      mobile: s(mobile).replace(/\D/g, ""), // keep only digits
      company: s(company),
      subject: s(subject),
      designation: s(designation),
      requirement: s(requirement),
    };

    // --- Validation ---
    if (!data.name) return res.status(400).json({ success: false, message: "Name is required." });
    if (!validEmail(data.email)) return res.status(400).json({ success: false, message: "Invalid email." });
    if (data.mobile && !validMobile(data.mobile)) {
      return res.status(400).json({ success: false, message: "Invalid mobile number." });
    }
    if (!data.subject) return res.status(400).json({ success: false, message: "Subject is required." });
    if (!data.requirement) return res.status(400).json({ success: false, message: "Requirement is required." });

    // --- DB Insert (MongoDB) ---
    const doc = new ContactMessage({
      name: data.name,
      email: data.email,
      mobile: data.mobile || null,
      company: data.company || null,
      subject: data.subject,
      designation: data.designation || null,
      requirement: data.requirement,
    });

    await doc.save();

    return res.status(201).json({ success: true, message: "Message saved successfully." });
  } catch (err) {
    console.error("POST /api/contact error:", err);
    return res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
});

export default router;
