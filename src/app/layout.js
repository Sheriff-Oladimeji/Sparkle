import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Sparkle",
  description: "Empower your brand with our creative expertise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mont">
        <Navbar/>
        {children}</body>
    </html>
  );
}
