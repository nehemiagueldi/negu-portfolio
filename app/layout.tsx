import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";
import SplashCursor from "@/components/ui/SplashCursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nehemia Gueldi | Portfolio",
  description: "Modern & Minimalist JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SplashCursor
            DENSITY_DISSIPATION={5}
            VELOCITY_DISSIPATION={0.5}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.1}
            SPLAT_FORCE={3500}
            COLOR_UPDATE_SPEED={10}
            SHADING
            RAINBOW_MODE  
            // COLOR="#A855F7"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
