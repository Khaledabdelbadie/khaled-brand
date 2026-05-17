"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

const skillCategories = [
  {
    title: "Industrial Automation",

    skills: [
      "Siemens S7-300/400/1200/1500",
      "PCS 7 DCS",
      "WinCC Professional",
      "WinCC Unified",
      "CEMAT",
      "PID Control",
      "Interlocks & Protections",
    ],
  },

  {
    title: "SCADA & Digitalization",

    skills: [
      "Industrial Historians",
      "Smart Factory Systems",
      "IIoT Architectures",
      "KPI Dashboards",
      "Energy Management",
      "OT/IT Integration",
    ],
  },

  {
    title: "Programming & Data",

    skills: [
      "Python",
      "SQL",
      "JavaScript",
      "React",
      "Node.js",
      "Pandas",
      "Plotly",
    ],
  },

  {
    title: "Infrastructure & Networks",

    skills: [
      "PROFINET",
      "PROFIBUS",
      "Modbus TCP",
      "Industrial Networking",
      "Virtualization",
      "Backup Systems",
      "SCADA Infrastructure",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-spacing relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      <Container>
        <SectionTitle
          eyebrow="Technical Expertise"
          title="Advanced industrial automation and digital transformation capabilities."
          description="Comprehensive expertise across industrial control systems, SCADA architectures, smart manufacturing, OT infrastructure, and data-driven industrial optimization."
        />

        <div className="grid xl:grid-cols-2 gap-8 mt-20">
          {skillCategories.map(
            (category, index) => (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="border border-white/5 bg-white/[0.02] rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />

                  <p className="text-cyan-400 tracking-[0.22em] uppercase text-xs">
                    Specialization Area
                  </p>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] leading-tight">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3 mt-10">
                  {category.skills.map(
                    (skill) => (
                      <div
                        key={skill}
                        className="px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 text-sm hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] transition-all duration-300"
                      >
                        {skill}
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}