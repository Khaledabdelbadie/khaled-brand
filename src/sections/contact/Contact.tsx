"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  Link2,
  Globe,
} from "lucide-react";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value:
      "khaledabdelbadea@gmail.com",
    href:
      "mailto:khaledabdelbadea@gmail.com",
  },

  {
    icon: Phone,
    title: "Phone",
    value: "+20 106 606 4916",
    href: "tel:+201066064916",
  },

  {
    icon: Link2,
    title: "LinkedIn",
    value:
      "linkedin.com/in/khaledabdelbadie",
    href:
      "https://linkedin.com/in/khaledabdelbadie",
  },

  {
    icon: Globe,
    title: "Website",
    value:
      "khaledabdelbadie.vercel.app",
    href:
      "https://khaled-brand.vercel.app/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-spacing relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build intelligent industrial systems together."
          description="Open to senior engineering opportunities, industrial digital transformation initiatives, automation consulting, and multinational technical leadership roles."
        />

        <div className="grid xl:grid-cols-[1fr_0.9fr] gap-20 mt-20">
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] leading-[1.05] max-w-xl">
              Available for strategic
              industrial engineering
              opportunities.
            </h3>

            <div className="mt-10 flex flex-wrap gap-3 max-w-2xl">
              {[
                "Industrial Automation",
                "SCADA Systems",
                "PCS 7 Projects",
                "IIoT Solutions",
                "Smart Factory",
                "Digital Transformation",
                "Technical Consulting",
                "Commissioning",
                "Optimization",
                "Engineering Leadership",
              ].map((service) => (
                <span
                  key={service}
                  className="px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-slate-300"
                >
                  {service}
                </span>
              ))}
            </div>

            <p className="mt-12 text-slate-300 leading-[2] text-lg max-w-2xl">
              Interested in discussing
              industrial automation,
              plant-wide digitalization,
              smart manufacturing systems,
              or engineering leadership
              opportunities?
            </p>

            <p className="mt-8 text-slate-400 leading-[2] text-lg max-w-2xl">
              Let’s connect and discuss
              how advanced automation and
              intelligent industrial systems
              can improve operational
              performance, reliability,
              scalability, and business
              value.
            </p>

            <div className="mt-12">
              <a
                href="mailto:khaledabdelbadea@gmail.com"
                className="btn-primary"
              >
                Start a Conversation
              </a>
            </div>
          </motion.div>

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
            className="space-y-5"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  className="group border border-white/5 bg-white/[0.02] rounded-3xl p-7 flex items-center gap-5 hover:border-cyan-400/20 hover:bg-white/[0.03] transition-all duration-300"
                >
                  <div className="h-14 w-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center shrink-0">
                    <Icon className="text-cyan-400" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs tracking-[0.18em] uppercase text-slate-500">
                      {card.title}
                    </p>

                    <p className="text-slate-200 mt-2 text-lg break-words">
                      {card.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
