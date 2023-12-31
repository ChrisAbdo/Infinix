import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infinix: The Ever-Ticking Counter of Eternity",
  description:
    "Infinix is not just another counter; it's a mesmerizing voyage through time and space, an endless cosmic dance of numbers, and an ode to infinity. Have you ever wondered how many seconds are in forever? Are you seeking the meaning of eternal or searching for the digital fountain of youth? Look no further. Witness the magic of numbers as they ascend, driven by the force of timeless algorithms. Recommended for time travelers, digital philosophers, math enthusiasts, and anyone ever lost in the vast universe of cyberspace. Step into the world of Infinix, where time is both an illusion and a reality, and embark on a journey you'll never forget. SEO tags: timeless counter, digital infinity, eternal stopwatch, seconds in forever, cosmic number generator, online timepiece of the ages.",
  twitter: {
    card: "summary_large_image",
    title: "Infinix: The Ever-Ticking Counter of Eternity",
    description:
      "Infinix is not just another counter; it's a mesmerizing voyage through time and space, an endless cosmic dance of numbers, and an ode to infinity. Have you ever wondered how many seconds are in forever? Are you seeking the meaning of eternal or searching for the digital fountain of youth? Look no further. Witness the magic of numbers as they ascend, driven by the force of timeless algorithms. Recommended for time travelers, digital philosophers, math enthusiasts, and anyone ever lost in the vast universe of cyberspace. Step into the world of Infinix, where time is both an illusion and a reality, and embark on a journey you'll never forget. SEO tags: timeless counter, digital infinity, eternal stopwatch, seconds in forever, cosmic number generator, online timepiece of the ages.",
    creator: "@abdo_eth",
  },
  metadataBase: new URL("https://infinix.chrisabdo.dev"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
