import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";


const font = Manrope({
  weight: ["200", "300", "400","500","600","700","800"],
  subsets:[ "latin"]
})



export const metadata: Metadata = {
  title: "CravyKitchen",
  description: "CravyKitchen – your go-to food delivery app.",
  icons:{
    icon:"favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
