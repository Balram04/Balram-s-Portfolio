import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/NavbarClient";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: 'black',
}

export const metadata = {
  title: 'Rohit Damer | Full-Stack Web Developer Portfolio',
  description:
    'Rohit Damer is a full-stack web developer and software developer based in Rajasthan, India. Explore my portfolio, skills, and projects in web development and blockchain.',
  keywords: [
    'Rohit Damer',
    'software developer',
    'full-stack developer',
    'web developer Toronto',
    'blockchain development',
    'MERN stack',
    'portfolio',
    'York University',
    'Computer Science'
  ],
  authors: [{ name: 'Rohit Damer' }],
  alternates: {
    canonical: 'https://vandit-shah.me/',
  },
  appleWebApp: {
    title: "Rohit-Damer-Portfolio"
  },
  openGraph: {
    title: 'Rohit Damer | Full-Stack Web Developer Portfolio',
    description:
      'Explore Rohit Damer’s portfolio, showcasing skills and projects in full-stack web development and blockchain.',
    url: 'https://vandit-shah.me',
    siteName: 'Rohit Damer Portfolio',
    images: [
      {
        url: 'https://vandit-shah.me/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rohit Damer Portfolio Preview',
      },
    ],
    logo: 'https://vandit-shah.me/logo/logo.png',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Damer | Full-Stack Web Developer Portfolio',
    description:
      'Explore Rohit Damer’s portfolio, showcasing skills and projects in full-stack web development and blockchain.',
    images: ['https://vandit-shah.me/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Rohit Damer',
                jobTitle: 'Full-Stack Web Developer',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Toronto',
                  addressRegion: 'ON',
                  addressCountry: 'Canada',
                },
                url: 'https://vandit-shah.me',
                sameAs: [
                  'https://github.com/ShahVandit8',
                  'https://www.linkedin.com/in/shah-vandit/',
                  'https://www.instagram.com/shahvandit8/',
                  'https://medium.com/@shahvandit8',
                  'https://vandit-shah.vercel.app/'
                ],
                description:
                  'Rohit Damer is a full-stack web developer based in Toronto, Canada, specializing in MERN stack, Python, Java, and blockchain development.',
                image: {
                  '@type': 'ImageObject',
                  url: 'https://vandit-shah.me/images/vandit-shah-headshot.png',
                  caption: 'Headshot of Rohit Damer, a full-stack web developer',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'VideoObject',
                name: 'Rohit Damer Portfolio Background Video',
                description:
                  'A background video showcasing Rohit Damer’s portfolio, highlighting skills and projects in full-stack web development and blockchain.',
                thumbnailUrl: 'https://vandit-shah.me/background/bg.png',
                contentUrl: 'https://vandit-shah.me/background/bg-video.mp4',
                uploadDate: '2025-04-05',
                duration: 'PT15S',
                embedUrl: 'https://vandit-shah.me',
              },
            ]),
          }}
        />
        <meta property="og:logo" content="https://vandit-shah.me/logo/logo.png"></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `} suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
