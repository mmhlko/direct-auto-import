import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Прямой импорт автомобилей из Азии | Direct Auto Import",
  description:
    "Импорт автомобилей из Японии, Южной Кореи и Китая. Экспертный подбор, выгодные цены, прозрачные условия, гарантия качества.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
