import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "WebPro.id — Jasa Pembuatan Website Profesional | Bisnismu Naik Level",
  description: "Website bukan luksa, ini kebutuhan. Jasa pembuatan website profesional untuk bisnis Indonesia. Tampil profesional, customer lebih percaya, WhatsApp ramai orderan.",
  keywords: ["jasa pembuatan website", "website bisnis", "website profesional", "landing page", "website UMKM", "website Indonesia", "jasa web"],
  authors: [{ name: "WebPro.id" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "WebPro.id — Jasa Pembuatan Website Profesional",
    description: "Website bukan luksa, ini kebutuhan. Bisnismu tanpa website = customer lari ke kompetitor.",
    siteName: "WebPro.id",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebPro.id — Jasa Pembuatan Website Profesional",
    description: "Website bukan luksa, ini kebutuhan. Bisnismu tanpa website = customer lari ke kompetitor.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
