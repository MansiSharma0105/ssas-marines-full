import mongoose from "mongoose";

const { Schema } = mongoose;

const ContactMessageSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    mobile: { type: String, trim: true, default: null },
    company: { type: String, trim: true, default: null },
    subject: { type: String, required: true, trim: true },
    designation: { type: String, trim: true, default: null },
    requirement: { type: String, required: true, trim: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const ContactMessage = mongoose.model("ContactMessage", ContactMessageSchema);

export default ContactMessage;
