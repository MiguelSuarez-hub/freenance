import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { QueryProvider } from "@/providers/query-provider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freenance",
  description: "Finance App, web application to manage your economics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={nunito.className}>
          <Header />
          <QueryProvider>{children}</QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
