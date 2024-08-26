import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth App",
  description: "A simple authentication app using Next.js and DRF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-500 p-4 text-white">
          <h1 className="text-2xl font-bold">Auth App</h1>
        </header>
        <main className="container mx-auto mt-8 px-4">
          {children}
        </main>
        <footer className="bg-gray-200 p-4 mt-8 text-center">
          <p>&copy; 2023 Auth App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
