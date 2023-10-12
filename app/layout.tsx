import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/base/Header";

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Issue Tracker Webiste For Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <Header />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
