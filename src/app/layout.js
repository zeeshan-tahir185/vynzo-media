import { Geist, Geist_Mono, Space_Grotesk, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Vynzo Media - Professional Digital Agency | Video Editing, Animation, Web Development",
  description: "Vynzo Media offers professional video editing, animation, logo design, UI/UX design, web development, SEO marketing, and digital marketing services. Transform your ideas into stunning visual experiences.",
  keywords: "video editing, animation, logo design, web development, UI/UX design, SEO marketing, digital marketing, GIF creation, Vynzo Media",
  authors: [{ name: "Vynzo Media" }],
  openGraph: {
    title: "Vynzo Media - Professional Digital Agency",
    description: "Transform your ideas into stunning visual experiences",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} ${montserrat.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
