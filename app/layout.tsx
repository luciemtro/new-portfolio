import type { Metadata } from "next";
import "./styles/globals.scss";
import { Genos, Zen_Dots } from "next/font/google";

const genos = Genos({ subsets: ["latin"], variable: "--font-genos" });
const zendots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zendots",
});

export const metadata: Metadata = {
  title: "Portfolio de Lucie Monteiro – Développeuse Web Full-Stack",
  description:
    "Découvrez le portfolio de Lucie Monteiro, développeuse web full-stack spécialisée en React, Node.js et TypeScript.",
  authors: [
    {
      name: "Lucie Monteiro",
      url: "https://portefolio-monteiro-lucie.vercel.app",
    },
  ],
  keywords: [
    "Lucie Monteiro",
    "développeuse web",
    "portfolio",
    "React",
    "Node.js",
    "TypeScript",
    "développement full-stack",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${genos.variable} ${zendots.variable}`}>
      <head>
        {/* Icône Devicon */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
