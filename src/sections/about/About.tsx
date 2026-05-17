"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

import FadeIn from "@/components/animations/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="section-spacing relative overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      <Container>
        <SectionTitle
          eyebrow="About Me"
          title="Engineering intelligent industrial systems with strategic business impact."
          description="Senior Industrial Automation & Digital Transformation Engineer with over 10 years of experience delivering plant-wide automation systems across cement, metals, recycling, mining, and manufacturing industries."
        />

        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-20 xl:gap-28 items-start mt-20">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-slate-200 leading-[2] text-xl md:text-2xl">
                I specialize in designing and
                implementing end-to-end
                industrial automation,
                SCADA, DCS, and digital
                transformation systems using
                Siemens technologies including
                PCS 7, TIA Portal, WinCC,
                industrial historians, and
                OT/IT integration platforms.
              </p>

              <p className="text-slate-400 leading-[2] mt-10 text-lg">
                My experience spans complete
                project lifecycles including
                architecture design,
                engineering, commissioning,
                startup, optimization,
                industrial networking,
                reporting systems, energy
                management, and smart factory
                initiatives.
              </p>

              <p className="text-slate-400 leading-[2] mt-10 text-lg">
                I focus on delivering
                measurable operational impact
                through intelligent automation,
                data-driven optimization,
                system reliability, and
                scalable industrial digital
                infrastructure.
              </p>

              <div className="mt-14">
                <a
                  href="#projects"
                  className="btn-primary"
                >
                  Explore Major Projects
                </a>
              </div>
            </div>
          </FadeIn>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="border border-white/5 bg-white/[0.02] rounded-3xl p-8 md:p-10">
              <h3 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] leading-tight">
                Core Specialization
              </h3>

              <ul className="mt-8 space-y-5 text-slate-400 leading-[1.9]">
                <li>
                  • Industrial Automation &
                  Control Systems
                </li>

                <li>
                  • PLC / DCS / SCADA
                  Engineering
                </li>

                <li>
                  • Industrial Digital
                  Transformation
                </li>

                <li>
                  • Smart Factory & IIoT
                  Systems
                </li>

                <li>
                  • OT/IT Integration
                </li>

                <li>
                  • Industrial Data &
                  Reporting Systems
                </li>
              </ul>
            </div>

            <div className="border border-white/5 bg-white/[0.02] rounded-3xl p-8 md:p-10">
              <h3 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] leading-tight">
                Industries Served
              </h3>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Cement",
                  "Metals",
                  "Mining",
                  "Recycling",
                  "Manufacturing",
                  "Power Cables",
                ].map((industry) => (
                  <span
                    key={industry}
                    className="px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-slate-300"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}