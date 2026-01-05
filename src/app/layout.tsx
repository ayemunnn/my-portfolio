import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myportfoliome.vercel.app"),
  title: "Aman/Ayemunnn | Data Scientist",
  description:
    "Aman/Ayemunnn is a Data Scientist and self-taught developer specializing in analytics, Next.js, and crafting data-driven solutions.",
  keywords: [
    "Self-taught",
    "Software Engineer",
    "Web Development",
    "Entrepreneur",
    "Data Scientist",
    "Analytics",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Aman",
    "Ayemunnn",
  ],
  authors: [{ name: "Aman/Ayemunnn" }],
  creator: "Aman/Ayemunnn",
  publisher: "Aman/Ayemunnn",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/img/profile-image.png",
    shortcut: "/img/profile-image.png",
    apple: "/img/profile-image.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myportfoliome.vercel.app",
    siteName: "Aman/Ayemunnn Portfolio",
    title: "Aman/Ayemunnn | Data Scientist",
    description:
      "Aman/Ayemunnn is a Data Scientist and self-taught developer specializing in analytics, Next.js, and crafting data-driven solutions.",
    images: [
      {
        url: "https://myportfoliome.vercel.app/img/profile-image.png",
        width: 1200,
        height: 630,
        alt: "Aman/Ayemunnn | Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman/Ayemunnn | Data Scientist",
    description:
      "Aman/Ayemunnn is a Data Scientist and self-taught developer specializing in analytics, Next.js, and crafting data-driven solutions.",
    creator: "@Ayemunnn",
    images: ["https://myportfoliome.vercel.app/img/profile-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Aman/Ayemunnn",
  },
};

import { ThemeProvider } from "@/components/theme-provider";

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
              name: "Aman/Ayemunnn",
              url: "https://myportfoliome.vercel.app",
              image: "https://myportfoliome.vercel.app/profile-image.jpg",
              sameAs: [
                "https://github.com/ayemunnn",
                "https://www.linkedin.com/in/aman-kumar-a9550520b/",
              ],
              jobTitle: "Data Scientist",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="font-sans border-b border-l border-r max-w-3xl mx-auto dark:border-gray-800">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
