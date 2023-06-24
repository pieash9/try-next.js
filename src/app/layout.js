import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Try next  js",
  description: "Next js",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>{children}</body>
    </html>
  );
};
export default RootLayout;
