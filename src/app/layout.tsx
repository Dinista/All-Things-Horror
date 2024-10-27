import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "../../public/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../../public/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const argentum = localFont({
  src: "../../public/fonts/ArgentumSans-light.ttf",
  variable: "--font-argentum-sans",
  weight: '400'
})

const genera = localFont({
  src: "../../public/fonts/generaSB.ttf",
  variable: "--font-genera-sans",
  weight: '600'
})

const bloody = localFont({
  src: "../../public/fonts/Bloody.otf",
  variable: "--font-bloody-sans",
  weight: '500'
})

const neoplanta = localFont({
  src: "../../public/fonts/NeoplantaBold.otf",
  variable: "--font-neoplanta-sans",
  weight: '800'
})



export const metadata: Metadata = {
  title: "All Things Horror",
  description: "All things horror - Keep it dark",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${argentum.variable} ${genera.variable} ${bloody.variable} ${neoplanta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
