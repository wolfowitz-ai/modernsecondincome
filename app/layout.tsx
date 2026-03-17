import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Second Income — Side Business Automation Stack",
  description: "5 Make.com workflows that run your side business while you're at work. Free PDF.",
  metadataBase: new URL("https://modernsecondincome.com"),
  openGraph: {
    title: "The Side Business Automation Stack",
    description: "5 Make.com workflows that run your side business while you're at work. Free PDF.",
    url: "https://modernsecondincome.com",
    siteName: "Modern Second Income",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
