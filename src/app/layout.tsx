import type { Metadata } from "next";
import ThemeProvider from "@/components/shared/ThemeProvider";
import {
  Inter,
  Space_Grotesk,
} from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title:
    "Khaled Abdelbadie | Industrial Automation Engineer",

  description:
    "Senior Industrial Automation & Digital Transformation Engineer specialized in PLC, DCS, SCADA, IIoT, and Smart Manufacturing Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
>
      <body
  className={`${inter.variable} ${spaceGrotesk.variable}`}
>
  <ThemeProvider>
    {children}
  </ThemeProvider>
</body>
    </html>
  );
}