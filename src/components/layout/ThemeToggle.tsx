"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } =
    useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-11 w-11 rounded-full glass" />
    );
  }

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="h-11 w-11 rounded-full glass flex items-center justify-center hover:border-cyan-400/30 transition-all duration-300"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}