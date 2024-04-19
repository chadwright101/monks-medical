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
        <div className="max-w-[1100px] mx-7 min-[1156px]:mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
