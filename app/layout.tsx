import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Janis Winkelmann Portfolio",
  icons: {
    icon: [
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-light.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
  description:
    "Portfolio of Janis Winkelmann - Frontend and Backend Developer specializing in Next.js, Python, and Go.",
  openGraph: {
    title: "Janis Winkelmann Portfolio",
    description:
      "Frontend and Backend Developer specializing in Next.js, Python, and Go.",
    url: "https://janiswinkelmann.com",
    siteName: "Janis Winkelmann Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Janis Winkelmann Portfolio",
    description:
      "Frontend and Backend Developer specializing in Next.js, Python, and Go.",
  },
}

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >

      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
