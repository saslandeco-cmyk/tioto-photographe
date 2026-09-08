import { Anton, Work_Sans, JetBrains_Mono, Arimo } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  display: "swap",
});

export const metadata = {
  title: "L'Instant J — Photographe de mariage Gironde · Landes · Pays Basque",
  description:
    "Photographe de mariage entre Gironde, Landes et Pays Basque. Des images vraies, sans pose forcée, pour raconter le jour de votre vie.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${anton.variable} ${workSans.variable} ${mono.variable} ${arimo.variable}`}>
        {children}
      </body>
    </html>
  );
}
