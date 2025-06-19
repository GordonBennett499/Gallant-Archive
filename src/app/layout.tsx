import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-firacode'
});

export const metadata: Metadata = {
  title: "Gallant Archive",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} antialiased flex flex-col min-h-screen justify-between bg-slate-950 text-slate-50`}>
        <div>
          <NavBar />
          <main className='relative mx-auto w-full max-w-6xl px-10 py-5'>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
