import { PropsWithChildren } from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property Pulse | Find The Perfect Rental",
  description:
    "Find the perfect rental property in your area with Property Pulse.",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
