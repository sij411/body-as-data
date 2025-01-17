import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const consolas = localFont({
    src:  './fonts/Consolas.woff2',
    display: 'swap',
});


export const metadata: Metadata = {
  title: "Body as data",
  description: "Generated by Jiwon Kwon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${consolas.className} w-full h-full bg-white`}>{children}</body>
    </html>
  );
}
