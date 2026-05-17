"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

const projects = [
  {
    title:
      "Zinc Oxide Production Plant – EAFD Recycling",

    role:
      "Automation Project Lead",

    image:
      "/images/projects/zinc-oxide-project.png",

    technologies: [
      "Siemens S7-1500",
      "TIA Portal",
      "WinCC",
      "Industrial Historian",
      "SCADA",
      "OT Infrastructure",
    ],

    description:
      "Delivered a complete industrial automation and digital infrastructure solution for a zinc oxide production facility specialized in EAFD recycling processes.",

    highlights: [
      "Designed modular PLC architecture for scalable operations",

      "Engineered SCADA systems including alarms, trends, audit trails, and reporting",

      "Implemented automation for thermal systems, gas handling, filtration, and material flow",

      "Led FAT, SAT, commissioning, startup, and operator training",
    ],
  },

  {
    title:
      "Zinc Ingots Production Plant (PCS 7)",

    role:
      "PCS 7 Lead Engineer",

    image:
      "/images/projects/zinc-ingots-project.png",

    technologies: [
      "Siemens PCS 7",
      "CEMAT MINRAS",
      "APL",
      "DCS",
      "Process Automation",
    ],

    description:
      "Designed and implemented complete DCS architecture for a zinc ingots production facility using Siemens PCS 7 process control systems.",

    highlights: [
      "Developed complete control philosophy and FDS documentation",

      "Configured APL-based process control and diagnostics",

      "Engineered historian systems and reporting infrastructure",

      "Designed operator stations and industrial process visualization",
    ],
  },

  {
    title:
      "Slag Mill Automation Project – Saudi Arabia",

    role:
      "Senior Automation & DCS Engineer",

    image:
      "/images/projects/slag-mill-project.png",

    technologies: [
      "Siemens PCS 7",
      "CEMAT",
      "MCC Integration",
      "VFD Systems",
    ],

    description:
      "Delivered industrial automation systems for slag grinding mill operations and auxiliary industrial process systems.",

    highlights: [
      "Integrated MCCs, VFDs, and industrial instrumentation",

      "Developed interlocks, protections, and alarm systems",

      "Led commissioning and client acceptance activities",

      "Implemented industrial reporting and operational monitoring systems",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      <Container>
        <SectionTitle
          eyebrow="Major Projects"
          title="Enterprise industrial automation projects delivering measurable operational impact."
          description="Large-scale industrial engineering projects spanning automation architecture, smart manufacturing systems, SCADA infrastructure, and industrial digital transformation."
        />

        <div className="space-y-28 mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
              className="space-y-12"
            >
              <div className="relative h-[420px] md:h-[560px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

                <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-5xl">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md mb-6 border border-white/10">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />

                    <p className="!text-cyan-200 text-xs tracking-[0.22em] uppercase font-medium">
                      {project.role}
                    </p>
                  </div>

                  <h3 className="!text-white text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.05em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="grid xl:grid-cols-[1fr_0.9fr] gap-14">
                <div>
                  <p className="text-muted leading-[2] text-lg max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-10">
                    {project.technologies.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="space-y-5">
                  <h4 className="text-2xl font-semibold tracking-[-0.03em] text-primary">
                    Project Highlights
                  </h4>

                  {project.highlights.map(
                    (highlight) => (
                      <div
                        key={highlight}
                        className="flex gap-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none p-6"
                      >
                        <div className="h-2 w-2 rounded-full bg-cyan-400 mt-3 shrink-0" />

                        <p className="text-muted leading-[1.9]">
                          {highlight}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}