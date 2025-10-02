import React from "react";
import { motion } from "framer-motion";
import WaveDivider from "../components/WaveDivider.jsx";
import CTA from "../components/CTA.jsx";

// === All Services ===
const services = [
  {
    title: "Onboard Audits – Marine & Technical",
    description:
      "Comprehensive onboard audits covering safety, compliance, operational efficiency, and technical performance.",
    icon: "🛠️",
  },
  {
    title: "Insurance Surveys",
    description:
      "Independent insurance surveys for vessel condition, cargo integrity, and damage claims. Supporting underwriters, P&I clubs, and shipowners.",
    icon: "📋",
  },
  {
    title: "New / Existing Vessels Take Over Surveys",
    description:
      "Detailed inspections for new or existing vessels, covering machinery, safety equipment, and compliance for investment decisions.",
    icon: "🚢",
  },
  {
    title: "Vessel Valuation Survey",
    description:
      "Accurate valuation based on market trends, condition, and class status. Useful for financing, sales, and insurance.",
    icon: "💰",
  },
  {
    title: "Draft Survey",
    description:
      "Precise cargo weight determination using draft survey methodology. Trusted by shippers and charterers.",
    icon: "⚖️",
  },
  {
    title: "Loading & Discharge Survey",
    description:
      "Supervision of loading/discharge operations to protect cargo quality, quantity, and reduce disputes.",
    icon: "📦",
  },
  {
    title: "Tanker Vetting",
    description:
      "Assessments aligned with OCIMF methodologies, covering SIRE observations, TMSA elements, and best practices.",
    icon: "⛴️",
  },
  {
    title: "Survey & Investigation",
    description:
      "Casualty, damage, contamination, and off-spec investigations with root-cause analysis and action plans.",
    icon: "🔎",
  },
  {
    title: "Dry Bulk Vetting",
    description:
      "Holistic risk reviews for vessels, terminals, and bulk logistics operations.",
    icon: "⚓",
  },
  {
    title: "Cargo Superintendency",
    description:
      "End-to-end supervision during load/discharge to safeguard quality, custody, and interests.",
    icon: "📑",
  },
  {
    title: "Project & Risk Management",
    description:
      "Hazard identification, HAZOP-style reviews, bow-tie risk modeling, and mitigation strategy planning.",
    icon: "📊",
  },
  {
    title: "P&I Correspondence",
    description:
      "Rapid coordination with underwriters, experts, and authorities to resolve claims efficiently.",
    icon: "📨",
  },
  {
    title: "Underwater Surveys",
    description:
      "UWILD and in-water inspections with certified divers and ROV partners for hull, sea chest, and propellers.",
    icon: "🤿",
  },
  {
    title: "Offshore Vessel / CMID / OVID",
    description:
      "Competency-based inspections and assurance frameworks for offshore vessels against CMID/OVID.",
    icon: "🌊",
  },
  {
    title: "Flag State Inspection",
    description:
      "Checks against flag requirements with practical corrective action guidance.",
    icon: "🚩",
  },
  {
    title: "Safety Training & Quality Assurance",
    description:
      "Onboard drills, reviews, and coaching to build a strong safety culture.",
    icon: "🦺",
  },
  {
    title: "Accident & Incident Investigation",
    description:
      "Evidence preservation, interviews, and unbiased causation analysis.",
    icon: "⚠️",
  },
  {
    title: "Pre-purchase Inspection",
    description:
      "Commercial & technical surveys with CAPEX & OPEX forecasts for buyers.",
    icon: "📝",
  },
  {
    title: "Third Party Audits",
    description:
      "Independent audits against international safety, quality, and environmental standards.",
    icon: "✅",
  },
  {
    title: "On Hire / Off Hire Survey",
    description:
      "Condition & bunker surveys to establish fair baselines during charter transitions.",
    icon: "⏱️",
  },
];

export default function Services() {
  return (
    <section className="services-section" style={{ background: "#f8fbff" }}>
      <div
        className="container"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "4rem 1rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "3rem",
        }}
      >
        {/* === Left Column (Services) === */}
        <div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            <h1 className="section-title" style={{ marginBottom: "0.5rem" }}>
              Our Services
            </h1>
            <p className="section-sub" style={{ color: "#4a5a6a" }}>
              Precision, independence and practicality—from berth to boardroom.
            </p>
          </motion.div>

          {/* === Services Grid === */}
          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.04 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "2rem 1.5rem",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  textAlign: "left",
                  minHeight: "auto",
                }}
              >
                <div
                  className="icon"
                  style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#1a3a5d",
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ margin: 0, color: "#4a5a6a", lineHeight: 1.6 }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === Sticky Sidebar === */}
        <aside
          aria-label="Talk to a Surveyor"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            position: "sticky",
            top: "120px", // adjust based on your header height
            alignSelf: "flex-start",
          }}
        >
          <CTA />
          <div
            className="card"
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <h4 style={{ marginTop: 0, marginBottom: "0.5rem" }}>
              Why SSAS Marine?
            </h4>
            <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: 1.7 }}>
              <li>Seasoned Masters & Chief Engineers</li>
              <li>Transparent reporting with clear actions</li>
              <li>Sustainability-aligned operations</li>
            </ul>
          </div>
        </aside>
      </div>

      <WaveDivider flip />

      {/* === Mobile Responsiveness (inline CSS for demo) === */}
      <style>
        {`
          @media (max-width: 768px) {
            .container {
              grid-template-columns: 1fr !important;
            }
            aside {
              order: -1; /* Move CTA above services */
              position: relative !important;
              top: auto !important;
            }
          }
        `}
      </style>
    </section>
  );
}
