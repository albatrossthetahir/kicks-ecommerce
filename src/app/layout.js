import "./globals.css";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#E7E7E3] font-sans antialiased px-14 py-8",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
