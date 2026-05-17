"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

const experiences = [
  {
    company:
      "Royal Group & Royal El Minya Cement Co.",

    role:
      "Senior Automation Project Engineer",

    period: "Nov 2024 — Present",

    description:
      "Leading large-scale industrial automation and digital transformation initiatives across cement and metallurgical plants.",

    achievements: [
      "Designed complete PLC, DCS, SCADA, historian, and OT infrastructure architectures",

      "Led multidisciplinary engineering teams across automation, electrical, instrumentation, and IT disciplines",

      "Developed control philosophies and Functional Design Specifications (FDS)",

      "Delivered optimization and modernization initiatives across plant operations",
    ],
  },

  {
    company:
      "Elsewedy Electric Power Cable Factories",

    role:
      "Senior Automation & SCADA Engineer",

    period: "Jan 2020 — Oct 2024",

    description:
      "Delivered plant-wide SCADA and smart manufacturing systems improving operational visibility and industrial performance.",

    achievements: [
      "Reduced system downtime by approximately 25%",

      "Improved production efficiency by approximately 15%",

      "Achieved approximately 12% reduction in energy consumption",

      "Integrated SCADA systems with Oracle and MS SQL Server",

      "Supported ISO 50001 initiatives and energy optimization systems",
    ],
  },

  {
    company:
      "Elsewedy Electric Power Cable Factories",

    role:
      "Automation & SCADA Engineer",

    period: "Jan 2015 — Jan 2020",

    description:
      "Developed PLC and SCADA systems for industrial production environments using Siemens, ABB, and Schneider platforms.",

    achievements: [
      "Implemented industrial monitoring and smart metering systems",

      "Supported commissioning and startup activities",

      "Performed troubleshooting and industrial optimization",

      "Contributed to energy management initiatives",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-spacing relative overflow-hidden"
    >
      <div className="absolute top-40 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      <Container>
        <SectionTitle
          eyebrow="Professional Experience"
          title="Delivering enterprise-scale automation and digital transformation systems."
          description="Over a decade of experience engineering industrial automation, SCADA, DCS, and smart manufacturing solutions across heavy industries."
        />

        <div className="space-y-24 mt-20">
          {experiences.map(
            (experience, index) => (
              <motion.div
                key={experience.role}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="border border-white/5 bg-white/[0.02] rounded-3xl p-8 md:p-10 xl:p-12"
              >
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-3 mb-5">
                      <div className="h-2 w-2 rounded-full bg-cyan-400 shrink-0" />

                      <p className="text-cyan-400 tracking-[0.22em] uppercase text-xs">
                        {experience.company}
                      </p>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.05em] leading-[1.1]">
                      {experience.role}
                    </h3>
                  </div>

                  <div className="w-fit text-slate-400 text-sm border border-white/5 rounded-2xl px-5 py-3 bg-white/[0.02]">
                    {experience.period}
                  </div>
                </div>

                <p className="mt-12 text-slate-300 leading-[2] text-lg max-w-3xl">
                  {experience.description}
                </p>

                <div className="grid md:grid-cols-2 gap-5 mt-12">
                  {experience.achievements.map(
                    (achievement) => (
                      <div
                        key={achievement}
                        className="border border-white/5 bg-white/[0.015] rounded-2xl p-6"
                      >
                        <p className="text-slate-400 text-sm leading-[1.9]">
                          {achievement}
                        </p>
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