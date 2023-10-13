import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          <ToastContainer
            autoClose={1000}
            bodyStyle={{ width: "200px" }}
            position="top-center"
            theme="light"
          />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
