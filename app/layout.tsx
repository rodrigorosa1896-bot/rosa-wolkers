import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rosawolkers.com"),

  title: "ROSA&WOLKERS | Instalações Elétricas e Infraestruturas em Sintra",

  description:
    "Especialistas em instalações elétricas, infraestruturas, abertura de valas, mini giratória, plataforma elevatória e manutenção. Orçamentos gratuitos.",

  keywords: [
    "eletricista Sintra",
    "instalações elétricas",
    "infraestruturas elétricas",
    "abertura de valas",
    "mini giratória",
    "plataforma elevatória",
    "ROSA&WOLKERS",
    "eletricista Lisboa",
    "manutenção elétrica",
    "orçamento eletricista",
  ],

  authors: [
    {
      name: "ROSA&WOLKERS",
    },
  ],

  creator: "ROSA&WOLKERS",

  openGraph: {
    title: "ROSA&WOLKERS",
    description:
      "Instalações elétricas, infraestruturas e aluguer de equipamentos em Sintra.",
    url: "https://rosawolkers.com",
    siteName: "ROSA&WOLKERS",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}