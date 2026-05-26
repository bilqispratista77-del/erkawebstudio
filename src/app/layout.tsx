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
  title: "Erka Web Studio — Jasa Pembuatan Website Profesional | Tampil Beda, Hasil Nyata",
  description: "Jasa pembuatan website profesional untuk segala bisnis Anda. Tampil beda, hasil nyata.",
  keywords: ["jasa pembuatan website", "website bisnis", "website profesional", "landing page", "website UMKM", "website Indonesia", "jasa web", "erka web studio"],
  authors: [{ name: "Erka Web Studio" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Erka Web Studio — Jasa Pembuatan Website Profesional",
    description: "Jasa pembuatan website profesional untuk segala bisnis Anda. Tampil beda, hasil nyata.",
    siteName: "Erka Web Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erka Web Studio — Jasa Pembuatan Website Profesional",
    description: "Jasa pembuatan website profesional untuk segala bisnis Anda. Tampil beda, hasil nyata.",
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
