import AppBar from "@/components/AppBar";
import "@/styles/globals.css";
import { ThemeProvider } from "./provider";
import { SessionProvider } from "next-auth/react";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Book Keeper App",
  description: "Website for managing your books",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AppBar />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
