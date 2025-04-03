import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gruppets",
  description: "The Fluffiest Token in Crypto",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://gruppets.fun',
    title: 'Gruppets',
    description: 'The Fluffiest Token in Crypto',
    siteName: 'Gruppets',
    images: [
      {
        url: '/images/puppet-group.png',
        width: 1200,
        height: 630,
        alt: 'Gruppets Token',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gruppets',
    description: 'The Fluffiest Token in Crypto',
    images: ['/images/puppet-group.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://gruppets.fun" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gruppets.fun" />
        <meta property="og:title" content="Gruppets" />
        <meta property="og:description" content="The Fluffiest Token in Crypto" />
        <meta property="og:image" content="/images/puppet-group.png" />
        <meta property="og:site_name" content="Gruppets" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gruppets" />
        <meta name="twitter:description" content="The Fluffiest Token in Crypto" />
        <meta name="twitter:image" content="/images/puppet-group.png" />
      </Head>
      <html lang="en">
        <body className={inter.className} style={{ backgroundColor: '#000000' }}>
          {children}
        </body>
      </html>
    </>
  )
}
