"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white overflow-hidden">
      
      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg bg-transparent py-3">
        <div className="container">
          <Link href="#" className="navbar-brand fw-bold fs-4 text-white">
            <span className="text-info">CareerPath</span> AI
          </Link>

          <Link href="/Home" className="btn btn-primary rounded-pill px-4 shadow"
          >
            <span className="fw-bold">Get Started</span>
          </Link>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="py-5 position-relative">
        <div className="container py-5">
          <div className="row align-items-center g-5">

            {/* LEFT */}
            <div className="col-lg-6">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="display-4 fw-bold mb-4"
              >
                AI Resume Analyzer &  
                <span className="text-info"> Career Predictor</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="lead opacity-75 mb-4"
              >
                Upload resume → Get ATS score → Discover skills →  
                Receive AI career recommendations instantly.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/Home"
                  className="btn btn-lg rounded-pill px-5 fw-bold"
                  style={{
                    background:
                      "linear-gradient(90deg,#6366f1,#22d3ee)",
                    border: "none",
                  }}
                >
                  🚀 Upload Resume
                </Link>
              </motion.div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/Resume-screen.jpeg"
                  alt="AI Resume"
                  width={520}
                  height={360}
                  className="rounded-4 shadow-lg"
                />
              </motion.div>
            </div>

          </div>
        </div>

        {/* glow */}
        <div
          className="position-absolute"
          style={{
            width: 400,
            height: 400,
            background: "#6366f1",
            filter: "blur(160px)",
            top: "-100px",
            right: "-100px",
            opacity: 0.4,
          }}
        />
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
           AI Features
          </h2>

          <div className="row g-4">
            {[
              {
                img: "/images/Resume-score.avif",
                title: "ATS Resume Score",
                desc: "AI checks resume for job filters & keywords",
              },
              {
                img: "/images/Resume-screen.jpeg",
                title: "AI Resume Analysis",
                desc: "Skill extraction + job matching",
              },
              {
                img: "/images/career-path.webp",
                title: "Career Prediction",
                desc: "Suggests best career path using ML",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="col-md-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="p-4 h-100 rounded-4"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={320}
                    height={200}
                    className="rounded-3 mb-3"
                  />
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="opacity-75">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-5 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="fw-bold mb-3"
        >
          Ready to Upgrade Your Career?
        </motion.h2>

        <Link
          href="/Home"
          className="btn btn-lg px-5 rounded-pill fw-bold"
          style={{
            background: "linear-gradient(90deg,#22d3ee,#6366f1)",
          }}
        >
          Start Now
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-4 opacity-50">
        © 2026 CareerPath AI • Hackathon Project
      </footer>
    </div>
  );
}