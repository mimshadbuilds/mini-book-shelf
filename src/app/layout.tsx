import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Playfair_Display, Work_Sans } from "next/font/google";
import BooksProvider from "@/Context/BookContext";
import { ToastContainer } from "react-toastify";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Book Shelf",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-(--font-work-sans)">
        <BooksProvider>
          <ToastContainer />
          <header>
            <nav>
              <Navbar />
            </nav>
          </header>
          <main>{children}</main>
        </BooksProvider>
      </body>
    </html>
  );
}
