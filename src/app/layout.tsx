import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import PiwikProProvider from "@piwikpro/next-piwik-pro";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Warp Code",
  description: "Coming soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PiwikProProvider
          containerId={process.env.NEXT_PUBLIC_CONTAINER_ID}
          containerUrl={process.env.NEXT_PUBLIC_CONTAINER_URL}
        >
          {children}
        </PiwikProProvider>
      </body>
    </html>
  );
}
