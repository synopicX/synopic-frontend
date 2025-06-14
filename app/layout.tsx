import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "../components/header"
import { ThemeProvider } from "./ThemeContext";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "demo app",
  description: "demo app",
  generator: null,
  openGraph: {
    title: 'demo app',
    description: 'demo app',
    siteName: 'keegang',
    url: 'https://manga-reader-demo.keegang.cc',
    images: '/placeholder.svg',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'demo app',
    description: 'demo app',
    images: '/placeholder.svg',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};
export const viewport = {
  themeColor: "#7700ff",
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={inter.className}>
        <Header></Header>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
