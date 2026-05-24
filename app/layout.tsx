import type { Metadata } from "next";
import {Plus_Jakarta_Sans} from "next/font/google"
import "./globals.css";

const plusJarkarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Nzema Scholars",
  description: "A platform for Nzema Students to find and apply for university admissions, scholarships and receive career guidance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJarkarta.className} ${plusJarkarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
