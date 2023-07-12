import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Sparkle",
  description: "Empower your brand with our creative expertise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mont flex flex-col justify-between min-h-screenth">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
