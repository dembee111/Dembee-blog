import { Vollkorn, Noto_Sans } from "next/font/google";
import "./globals.css";

const vollkorn = Vollkorn({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
  display: "swap",
});

const notoSans = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-noto",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Батдэмбэрэл",
  url: "https://samsara.mn",
  image: "https://samsara.mn/og-image.png",
  description:
    "Батдэмбэрэлийн хувийн blog. Програм хангамж, AI, Machine Learning, IoT, философи болон технологийн тухай тэмдэглэлүүд.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MN",
    addressLocality: "Ulaanbaatar",
  },
  sameAs: ["https://facebook.com/", "https://twitter.com/"],
};

export const metadata = {
  title: "Буддийн гүн ухаан | Samsara.mn | Програмчлал, AI, IoT, Философи",
  description:
    "Samsara.mn бол Батдэмбэрэлийн хувийн blog сайт. Програмчлал, backend development, full-stack engineering, AI, Machine Learning, IoT, hardware architecture, философи болон технологийн тухай нийтлэл, тэмдэглэлүүд.",

  keywords: [
    "Батдэмбэрэл",
    "Samsara",
    "samsara.mn",
    "backend development",
    "full-stack development",
    "JavaScript",
    "Java",
    "Python",
    "AI",
    "Machine Learning",
    "IoT",
    "embedded system",
    "hardware architecture",
    "software engineering",
    "programming",
    "философи",
    "Буддын философи",
    "technology blog",
    "Буддийн гүн ухаан",
  ],

  metadataBase: new URL("https://www.samsara.mn"),

  alternates: {
    canonical: "https://samsara.mn",
  },

  openGraph: {
    title: "Батдэмбэрэл | Samsara.mn | Програмчлал, AI, IoT, Философи",
    description:
      "Програмчлал, AI, Machine Learning, IoT, философи болон технологийн тухай хувийн блог.",
    url: "https://samsara.mn",
    siteName: "Samsara.mn",
    images: [
      {
        url: "https://samsara.mn/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samsara.mn",
      },
    ],
    locale: "mn_MN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Батдэмбэрэл | Samsara.mn | Програмчлал, AI, IoT, Философи",
    description:
      "Програмчлал, AI, Machine Learning, IoT, hardware architecture болон философийн тухай хувийн блог.",
    images: ["https://samsara.mn/og-image.png"],
  },

  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "https://samsara.mn/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "https://samsara.mn/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "https://samsara.mn/favicon.ico",
    },
    {
      rel: "shortcut icon",
      url: "https://samsara.mn/favicon.ico",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body
        className={`${vollkorn.className} ${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
