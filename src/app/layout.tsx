import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@/context/testContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Num hackaton",
  description: "Num hackaton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <div>{children}</div>
        </UserProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
