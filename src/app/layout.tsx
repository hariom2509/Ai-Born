import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import AiNeuralConstellation from "@/components/AiNeuralConstellation";
import { WhitelistProvider } from "@/components/WhitelistContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://aibornprotocol.xyz"),
  title: "AIBORN / AI Agents With an Onchain Identity",
  description:
    "AIBORN explores a new generation of AI agents with programmable identities, generated through Python and AI and built for an agentic future on Arc/Robinhood.",
  keywords: [
    "AIBORN",
    "AI Agents",
    "Onchain AI",
    "Genesis",
    "Arc/Robinhood Ecosystem",
    "Programmable Identity",
    "Python AI",
    "Autonomous Agents",
  ],
  authors: [{ name: "AIBORN Autonomous Research" }],
  creator: "AIBORN AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "AIBORN / AI Agents With an Onchain Identity",
    description:
      "AIBORN explores a new generation of AI agents with programmable identities, generated through Python and AI and built for an agentic future on Arc/Robinhood.",
    siteName: "AIBORN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIBORN Genesis Beta / 5000 AI Agent Identities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIBORN / AI Agents With an Onchain Identity",
    description:
      "Born in Python. Shaped by AI. Built on Arc/Robinhood. 5,000 Genesis AI Agents with onchain identity.",
    site: "@BornAI__",
    creator: "@BornAI__",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#040407",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#040407] text-[#f8fafc] antialiased selection:bg-purple-900 selection:text-white">
        {/* Ambient atmospheric glows */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-purple-900/15 rounded-full blur-[140px] animate-soft-pulse" />
          <div className="absolute top-[35%] -left-48 w-[600px] h-[600px] bg-blue-950/15 rounded-full blur-[160px]" />
          <div className="absolute top-[65%] -right-48 w-[650px] h-[650px] bg-purple-950/20 rounded-full blur-[160px]" />
          <div className="absolute inset-0 cyber-grid opacity-75" />
          <AiNeuralConstellation />
        </div>

        <WhitelistProvider>
          {/* Global sticky minimal navbar with AI Telemetry */}
          <Navbar />

          {/* Main page content */}
          <div className="relative z-10">{children}</div>
        </WhitelistProvider>
      </body>
    </html>
  );
}
