"use client";

import Link from "next/link";

import { useState } from "react";

import {
  Menu,
  X,
} from "lucide-react";

import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    label: "About",
    href: "#about",
  },

  {
    label: "Experience",
    href: "#experience",
  },

  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="navbar-surface">
        <Container className="h-20 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-[-0.04em]"
          >
            Khaled
            <span className="gradient-text">
              .
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-wide text-slate-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className="lg:hidden h-11 w-11 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center"
            >
              {isOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </Container>

        {isOpen && (
          <div className="lg:hidden border-t border-white/5 bg-black/80 backdrop-blur-xl">
            <Container className="py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-lg"
                >
                  {link.label}
                </a>
              ))}
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}