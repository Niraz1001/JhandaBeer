import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "झण्डा बियर",
  description: "प्रामाणिक जापानी स्वाद",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
