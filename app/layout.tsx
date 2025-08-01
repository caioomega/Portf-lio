import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Caio Hilario Mega",
  description:
    "Portfólio de Caio Hilario Mega - Desenvolvedor em Formação | Estudante de Análise e Desenvolvimento de Sistemas no SENAI",
  keywords: [
    "Caio Hilario Mega",
    "desenvolvedor",
    "programador",
    "python",
    "SENAI",
    "portfolio",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Caio Hilario Mega" }],
  creator: "Caio Hilario Mega",
  openGraph: {
    title: "Caio Hilario Mega - Desenvolvedor em Formação",
    description:
      "Portfólio de Caio Hilario Mega - Estudante de 16 anos apaixonado por tecnologia, cursando técnico no SENAI",
    url: "https://caiohilario.dev",
    siteName: "Caio Hilario Mega Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caio Hilario Mega - Desenvolvedor em Formação",
    description: "Portfólio de Caio Hilario Mega - Estudante de 16 anos apaixonado por tecnologia",
    creator: "@caioomega",
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
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: [
      {
        url: "/favicon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
