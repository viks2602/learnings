import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_DISCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import {ThemeProvider} from 'next-themes'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:{ 
    template : `%s | LEARNING NEXTJS`,
    default: APP_NAME,
  },
  description: APP_DISCRIPTION,
  metadataBase : new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider 
        attribute='class'
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        >

        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
