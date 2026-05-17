import "./globals.css";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${dmSans.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}