import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rosawolkers.com"),

  title: {
    default: "ROSA&WOLKERS | Instalações Elétricas em Sintra",
    template: "%s | ROSA&WOLKERS",
  },

  description:
    "Especialistas em instalações elétricas, infraestruturas elétricas, abertura de valas, mini giratória, plataforma elevatória e manutenção elétrica em Sintra, Cascais, Oeiras, Mafra e Lisboa.",

  keywords: [
    "eletricista Sintra",
    "eletricista Cascais",
    "eletricista Oeiras",
    "eletricista Lisboa",
    "instalações elétricas",
    "infraestruturas elétricas",
    "manutenção elétrica",
    "abertura de valas",
    "mini giratória",
    "plataforma elevatória",
    "aluguer mini giratória",
    "ROSA&WOLKERS",
    "orçamentos eletricista",
  ],

  authors: [
    {
      name: "ROSA&WOLKERS",
      url: "https://rosawolkers.com",
    },
  ],

  creator: "ROSA&WOLKERS",

  publisher: "ROSA&WOLKERS",

  alternates: {
    canonical: "https://rosawolkers.com",
  },

  verification: {
    google: "dKaxc41H54HICjyRRd197fXr8fyyY_J6gMpjho3opzs",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "ROSA&WOLKERS",

    description:
      "Especialistas em instalações elétricas, infraestruturas, abertura de valas, mini giratória e plataforma elevatória.",

    url: "https://rosawolkers.com",

    siteName: "ROSA&WOLKERS",

    locale: "pt_PT",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ROSA&WOLKERS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "ROSA&WOLKERS",

    description:
      "Instalações elétricas e infraestruturas em Sintra.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",

    name: "ROSA&WOLKERS",

    url: "https://rosawolkers.com",

    logo: "https://rosawolkers.com/logo.png",

    image: "https://rosawolkers.com/og-image.jpg",

    telephone: [
      "+351963880517",
      "+351912828740",
    ],

    email: "geral@rosawolkers.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Terrugem",
      addressRegion: "Sintra",
      postalCode: "2705-863",
      addressCountry: "PT",
    },

    areaServed: [
      "Sintra",
      "Cascais",
      "Oeiras",
      "Lisboa",
      "Mafra",
    ],

    priceRange: "€€",

    description:
      "Especialistas em instalações elétricas, infraestruturas elétricas, abertura de valas, mini giratória, plataforma elevatória e manutenção elétrica.",

    knowsAbout: [
      "Instalações Elétricas",
      "Infraestruturas Elétricas",
      "Remodelações Elétricas",
      "Abertura de Valas",
      "Mini Giratória",
      "Plataforma Elevatória",
      "Manutenção Elétrica",
    ],
  };

  return (
    <html lang="pt-PT">

      {/* Google Analytics 4 */}

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YQEGTQ9HF6"
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YQEGTQ9HF6');
        `}
      </Script>

      <body>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        {children}

      </body>

    </html>
  );
}