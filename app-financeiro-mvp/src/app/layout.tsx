import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const manrope = Manrope({ subsets: ["latin"], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: "Familia Finance - MVP",
  description: "Gerenciamento financeiro unificado com metodologia AUVP",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <body className={`${inter.className} bg-[#cfddea] text-[#0f0f0f] antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
