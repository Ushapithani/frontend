"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface AnalyzeResult {
  success: boolean;
  data: {
    file_name: string;
    score: number;
    skills: string[];
    insights: string[];
    career_primary: string;
    career_alternatives: string[];
    predictions: { career: string; confidence: number }[];
  };
  error?: string;
}

export default function HomePage() {
  const router = useRouter();

  const [fileName, setFileName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (selected.type !== "application/pdf") {
      alert("Only PDF allowed");
      e.target.value = "";
      return;
    }

    setFile(selected);
    setFileName(selected.name);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Upload resume first");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data: AnalyzeResult = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Analysis failed");
      }

      sessionStorage.setItem("analysisData", JSON.stringify(data.data));
      router.push("/Results");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      
      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg bg-transparent py-3">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold fs-4 text-white">
            <span className="text-info">CareerPath</span> AI
          </Link>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="py-5 text-center position-relative">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-4 fw-bold mb-3"
          >
            Upload Resume & Get
            <span className="text-info"> AI Career Insights</span>
          </motion.h1>

          <p className="lead opacity-75">
            ATS score • Skill gap • Career prediction
          </p>
        </div>

        {/* glow */}
        <div
          className="position-absolute"
          style={{
            width: 400,
            height: 400,
            background: "#6366f1",
            filter: "blur(150px)",
            top: "-100px",
            left: "40%",
            opacity: 0.4,
          }}
        />
      </section>

      {/* ================= UPLOAD CARD ================= */}
      <section className="py-5">
        <div className="container d-flex justify-content-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-5 rounded-4"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: "520px",
              width: "100%",
            }}
          >
            <h3 className="fw-bold mb-3 text-center">
              Upload Resume (PDF)
            </h3>

            <input
              type="file"
              accept="application/pdf"
              className="form-control mb-3"
              onChange={handleFileChange}
            />

            {fileName && (
              <p className="text-success text-center">
                ✅ {fileName}
              </p>
            )}

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="btn w-100 rounded-pill fw-bold mt-3"
              style={{
                background:
                  "linear-gradient(90deg,#6366f1,#22d3ee)",
                border: "none",
                padding: "12px",
              }}
            >
              {loading ? "Analyzing..." : "Analyze Resume"}
            </button>

            {error && (
              <p className="text-danger mt-3 text-center">{error}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            AI Features
          </h2>

          <div className="row g-4">
            {[
              "ATS Resume Score",
              "Skill Analysis",
              "Career Prediction",
            ].map((t, i) => (
              <motion.div
                key={i}
                className="col-md-4"
                whileHover={{ y: -10 }}
              >
                <div
                  className="p-4 rounded-4 h-100 text-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <h5 className="fw-bold">{t}</h5>
                  <p className="opacity-75">
                    AI powered career engine
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-4 opacity-50">
        © 2026 CareerPath AI
      </footer>
    </div>
  );
}