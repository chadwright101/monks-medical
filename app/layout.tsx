import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/navigation/header";

export const metadata: Metadata = {
  title: "Monk's Medical - Dr Kyle Rorke",
  description:
    "Welcome to our medical practice, where we prioritize preventive care and personalized medicine to promote optimal health and well-being.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
