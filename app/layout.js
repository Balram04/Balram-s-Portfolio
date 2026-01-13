import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: 'Balram Prajapati | Full-Stack Web Developer Portfolio',
  description:
    'Balram Prajapati is a full-stack web developer and software developer based in Rajasthan, India. Explore my portfolio, skills, and projects in web development and blockchain.',
  keywords: [
    'Balram Prajapati',
    'software developer',
    'full-stack developer',
    'web developer',
    'blockchain development',
    'MERN stack',
    'portfolio',
    'JavaScript',
    'React',
    'Node.js',
    'Computer Science',
    'Rajasthan'
  ],
  authors: [{ name: 'Balram Prajapati' }],
  alternates: {
    canonical: 'https://vandit-shah.me/',
  },
  appleWebApp: {
    title: "Balram-Prajapati-Portfolio"
  },
  openGraph: {
    title: 'Balram Prajapati | Full-Stack Web Developer Portfolio',
    description:
      'Explore Balram Prajapati portfolio showcasing skills and projects in full-stack web development and blockchain.',
    url: 'https://vandit-shah.me',
    siteName: 'Balram Prajapati Portfolio',
    images: [
      {
        url: 'https://vandit-shah.me/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Balram Prajapati Portfolio Preview',
      },
    ],
    logo: 'https://vandit-shah.me/logo/logo.png',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balram Prajapati | Full-Stack Web Developer Portfolio',
    description: 'Explore Balram Prajapati portfolio, showcasing skills and projects in full-stack web development and blockchain.',
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
                name: 'Balram Prajapati',
                jobTitle: 'Full-Stack Web Developer',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Rajasthan',
                  addressRegion: 'RJ',
                  addressCountry: 'India',
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
                  'Balram Prajapati is a full-stack web developer based in Rajasthan, India, specializing in MERN stack, Python, Java, and blockchain development.',
                image: {
                  '@type': 'ImageObject',
                  url: 'https://vandit-shah.me/images/vandit-shah-headshot.png',
                  caption: 'Headshot of Balram Prajapati, a full-stack web developer',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'VideoObject',
                name: 'Balram Prajapati Portfolio Background Video',
                description: 'A background video showcasing Balram Prajapati portfolio, highlighting skills and projects in full-stack web development and blockchain.',
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
