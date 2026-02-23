"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

type Prediction = {
  career: string;
  confidence: number;
};

type Analysis = {
  file_name: string | null;
  score: number;
  insights: string[];
  skills: string[];
  career_primary: string;
  career_alternatives: string[];
  predictions?: Prediction[];
};

export default function ResultsPage() {
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("analysisData");
    if (!stored) return;

    const parsed: Analysis = JSON.parse(stored);
    setAnalysis(parsed);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] text-white text-xl">
        🔍 Generating AI Report...
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] text-red-400">
        No analysis found
      </div>
    );
  }

  const atsChartData = {
    labels: ["Score", "Remaining"],
    datasets: [
      {
        data: [analysis.score, 100 - analysis.score],
        backgroundColor: ["#6366f1", "#1f2937"],
        borderWidth: 0,
      },
    ],
  };

  const topCareerChartData = {
    labels: analysis.predictions?.map((p) => p.career) ?? [],
    datasets: [
      {
        label: "Confidence %",
        data:
          analysis.predictions?.map((p) =>
            Math.round(p.confidence * 100)
          ) ?? [],
        backgroundColor: "#22d3ee",
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold">
            AI Resume Analysis Report
          </h1>
          <p className="opacity-70 mt-2">
            Advanced ATS + Career Prediction Engine
          </p>
        </motion.div>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ATS SCORE */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-6 rounded-3xl backdrop-blur-lg"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h2 className="text-lg font-semibold mb-4 text-center">
              ATS Score
            </h2>
            <div className="w-44 mx-auto">
              <Doughnut
                data={atsChartData}
                options={{
                  cutout: "70%",
                  plugins: { legend: { display: false } },
                }}
              />
            </div>
            <p className="text-center text-3xl font-bold mt-4 text-indigo-400">
              {analysis.score}/100
            </p>
          </motion.div>

          {/* CAREER MATCH */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-6 rounded-3xl backdrop-blur-lg"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h2 className="text-lg font-semibold mb-2">
              Best Career Match
            </h2>
            <p className="text-2xl font-bold text-green-400">
              {analysis.career_primary}
            </p>

            <p className="opacity-60 mt-3 text-sm">
              Alternatives:
            </p>
            <ul className="list-disc ml-5 text-sm opacity-80">
              {analysis.career_alternatives.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </motion.div>

          {/* FILE INFO */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-6 rounded-3xl backdrop-blur-lg"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h2 className="text-lg font-semibold mb-2">
              Resume File
            </h2>
            <p className="opacity-80">{analysis.file_name}</p>
            <p className="text-green-400 text-sm mt-2">
              ✔ Successfully Processed
            </p>
          </motion.div>
        </div>

        {/* SKILLS */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 rounded-3xl backdrop-blur-lg"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2 className="text-xl font-semibold mb-4">
            Detected Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {analysis.skills.map((s, i) => (
              <span
                key={i}
                className="px-4 py-1 rounded-full text-sm font-semibold"
                style={{
                  background:
                    "linear-gradient(90deg,#6366f1,#22d3ee)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CAREER CONFIDENCE CHART */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 rounded-3xl backdrop-blur-lg"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2 className="text-xl font-semibold mb-4 text-center">
            Career Confidence Analysis
          </h2>

          {analysis.predictions && analysis.predictions.length > 0 ? (
            <Bar
              data={topCareerChartData}
              options={{
                responsive: true,
                animation: { duration: 1500 },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                    grid: { color: "#1f2937" },
                    ticks: { color: "#fff" },
                  },
                  x: {
                    ticks: { color: "#fff" },
                    grid: { display: false },
                  },
                },
                plugins: {
                  legend: { display: false },
                },
              }}
            />
          ) : (
            <p className="text-center opacity-60">
              No predictions available
            </p>
          )}
        </motion.div>

        {/* INSIGHTS */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 rounded-3xl backdrop-blur-lg"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2 className="text-xl font-semibold mb-4">
            Resume Insights
          </h2>
          <ul className="space-y-2 opacity-80">
            {analysis.insights.map((i, idx) => (
              <li key={idx}>• {i}</li>
            ))}
          </ul>
        </motion.div>

        {/* FOOTER */}
        <footer className="text-center opacity-40 pt-6">
          © 2026 CareerPath AI • Hackathon Edition
        </footer>
      </div>
    </div>
  );
}