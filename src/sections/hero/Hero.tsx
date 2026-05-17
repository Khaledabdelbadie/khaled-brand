"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10+",
    label: "Years Experience",
  },

  {
    value: "25%",
    label: "Downtime Reduction",
  },

  {
    value: "15%",
    label: "Efficiency Increase",
  },

  {
    value: "12%",
    label: "Energy Savings",
  },
];

export default function Hero() {
  return (
    <section className="hero-grid min-h-screen flex items-center relative overflow-hidden pt-36 pb-24">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="grid xl:grid-cols-[1.1fr_0.9fr] gap-20 xl:gap-28 items-center"
        >
          <div className="text-center xl:text-left">
            <p className="inline-flex items-center gap-4 text-cyan-400 mb-8 text-xs tracking-[0.28em] uppercase">
              <span className="w-12 h-px bg-cyan-400" />

              Industrial Automation &
              Digital Transformation
            </p>

            <h1 className="text-5xl md:text-7xl xl:text-[96px] font-bold leading-[0.92] tracking-[-0.06em]">
              Khaled{" "}
              <span className="gradient-text">
                Abdelbadie
              </span>
            </h1>

            <p className="mt-10 text-slate-300 text-lg md:text-xl leading-[2] max-w-xl mx-auto xl:mx-0">
              Senior Industrial Automation &
              Digital Transformation Engineer
              specialized in PLC, DCS,
              SCADA, IIoT, Smart
              Manufacturing, and enterprise
              industrial systems for cement,
              metals, recycling, and
              manufacturing industries.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center xl:items-start gap-4">
              <a
                href="#projects"
                className="btn-primary"
              >
                Explore Projects
              </a>

              <a
                href="#contact"
                className="btn-secondary"
              >
                Let&apos;s Connect
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-white/5 bg-white/[0.02] rounded-3xl p-6"
                >
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                    {stat.value}
                  </h3>

                  <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center xl:justify-end">
            <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full" />

            <div className="relative">
              <div className="absolute -inset-6 border border-white/5 rounded-3xl" />

              <div className="relative w-80 h-80 md:w-[460px] md:h-[560px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
                <Image
                  src="/images/profile.jpg"
                  alt="Khaled Abdelbadie"
                  fill
                  sizes="(max-width: 768px) 320px, 460px"
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="glow glow-blue top-20 left-20" />

      <div className="glow glow-cyan bottom-20 right-20" />
    </section>
  );
}