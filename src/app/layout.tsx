import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "upsided 2000",
  description: "not even y2k can stop me!!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-cursive bg-upsided bg-repeat bg-[length:100px_100px] overflow-x-clip">
        {children}
        <footer className="bottom-1 fixed flex w-screen flex-row justify-center">
          <img src="/best_ns.gif" alt="Best viewed on Netscape"></img>
        </footer>
      </body>
    </html>
  );
}
