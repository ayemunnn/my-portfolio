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
    "Web Development",
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
    icon: "/profile-image.jpg",
    shortcut: "/profile-image.jpg",
    apple: "/profile-image.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myportfoliome.vercel.app",
    siteName: "Adebanjo Stephen Portfolio",
    title: "Adebanjo Stephen | Software Engineer",
    description:
      "Self-taught software engineer and entrepreneur, specializing in Frontend, Backend, Full-stack development with Next.js, JavaScript, and TypeScript. As the founder of StartupFounder, a platform connecting developers and showcasing startups, I'm is dedicated to fostering innovation and community within the tech industry.",
    images: [
      {
        url: "https://myportfoliome.vercel.app/img/profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Adebanjo Stephen | Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adebanjo Stephen | Software Engineer",
    description:
      "Self-taught software engineer and entrepreneur, specializing in Frontend, Backend, Full-stack development with Next.js, JavaScript, and TypeScript.",
    creator: "@AdebanjoSt63916",
    images: ["https://myportfoliome.vercel.app/img/profile-pic.jpg"],
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
    google: "your-google -verification-code",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Adebanjo Stephen Olumide",
  },
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Aman/Ayemunnn",
      url: "https://myportfoliome.vercel.app",
      image: "https://myportfoliome.vercel.app/img/profile-image.png",
      sameAs: [
        "https://github.com/ayemunnn",
        "https://www.linkedin.com/in/aman-kumar-a9550520b/",
      ],
      jobTitle: "Data Scientist",
      worksFor: {
        "@type": "Organization",
        name: "StartupFounder",
      },
    }),
  }}
/>;

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
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
