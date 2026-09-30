import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { WhatsappFloat } from "./site-components";
import { withBasePath } from "./base-path";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

const siteUrl = "https://carniceriadonpedro.com.uy";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Carnicería Don Pedro | Pan de Azúcar",
  description: "Carnicería Don Pedro en Pan de Azúcar, Maldonado: cortes frescos, elaboraciones propias, opciones especiales y pedidos por WhatsApp.",
  applicationName: "Carnicería Don Pedro",
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico"), sizes: "48x48" },
      { url: withBasePath("/favicon.png"), type: "image/png", sizes: "192x192" },
      { url: withBasePath("/favicon-don-pedro-v2-512.png"), type: "image/png", sizes: "512x512" },
    ],
    shortcut: withBasePath("/favicon.ico"),
    apple: [{ url: withBasePath("/apple-touch-icon-v2.png"), sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Carnicería Don Pedro | Pan de Azúcar",
    description: "Cortes frescos, elaboraciones propias y atención cercana en Sarandí 669, Pan de Azúcar.",
    url: siteUrl,
    siteName: "Carnicería Don Pedro",
    locale: "es_UY",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={geist.variable}>{children}<WhatsappFloat /></body></html>;
}
