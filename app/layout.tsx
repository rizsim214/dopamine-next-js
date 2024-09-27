import type { Metadata } from "next";
import "@/public/styles/globals.css";
import { Header } from "@/components/Navigation/Header";

export const metadata: Metadata = {
  title: "Dopamine",
  description: "Dopamine: Naturally Boost",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
