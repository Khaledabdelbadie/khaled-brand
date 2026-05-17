import Container from "@/components/layout/Container";

const footerLinks = [
  {
    label: "About",
    href: "#about",
  },

  {
    label: "Experience",
    href: "#experience",
  },

  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold">
              Khaled{" "}
              <span className="gradient-text">
                Abdelbadie
              </span>
            </h3>

            <p className="text-slate-500 mt-3 max-w-xl">
              Industrial Automation &
              Digital Transformation
              Engineer specialized in
              enterprise industrial systems,
              SCADA, DCS, smart
              manufacturing, and OT/IT
              integration.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Khaled Abdelbadie.
            All rights reserved.
          </p>

          <p className="text-slate-600 text-sm">
            Built with Next.js, React,
            Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </Container>
    </footer>
  );
}