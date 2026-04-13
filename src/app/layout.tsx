import type { Metadata } from "next";
import { Geist } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://myportfoliome.vercel.app";
const profileImage = `${siteUrl}/img/profile-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aman Kumar | Data Analyst, BI Developer & Automation Builder",
  description:
    "Portfolio of Aman Kumar, focused on analytics, Power BI, SQL, Python, ETL workflows, reporting automation, and applied AI projects.",
  keywords: [
    "Aman Kumar",
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Python",
    "ETL",
    "Analytics Portfolio",
  ],
  authors: [{ name: "Aman Kumar" }],
  creator: "Aman Kumar",
  publisher: "Aman Kumar",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/img/profile-image.png",
    shortcut: "/img/profile-image.png",
    apple: "/img/profile-image.png",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Aman Kumar Portfolio",
    title: "Aman Kumar | Data Analyst, BI Developer & Automation Builder",
    description:
      "Analytics, BI, ETL, reporting automation, and applied AI projects aligned to Aman Kumar's latest resume.",
    images: [
      {
        url: profileImage,
        width: 1200,
        height: 630,
        alt: "Aman Kumar portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Kumar | Data Analyst, BI Developer & Automation Builder",
    description:
      "Portfolio focused on analytics, dashboards, ETL workflows, and practical automation projects.",
    images: [profileImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aman Kumar",
              url: siteUrl,
              image: profileImage,
              sameAs: [
                "https://github.com/ayemunnn",
                "https://www.linkedin.com/in/aman-kumar-a9550520b/",
              ],
              jobTitle: "Data Analyst",
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Lambton College",
                },
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            <Navbar />
            <main className="mx-auto max-w-6xl">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
