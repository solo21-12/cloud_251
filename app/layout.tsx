import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionWrapper, AppWrapper } from "@/components/";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud 251",
  description: "Test project for cloud 251",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <AppWrapper>
            {children}
          </AppWrapper>
        </body>
      </html>

    </SessionWrapper>
  );
}
