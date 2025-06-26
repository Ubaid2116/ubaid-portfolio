import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/navbar";
import PremiumFooter from "@/components/layout/footer";
import FloatingChat from "@/components/chat/floating-chat";
import CustomCursor from "@/components/ui/custom-cursor";
import LoadingScreen from "@/components/ui/loading-screen";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Agentia World",
  description:
    "Agentia World is a cutting-edge platform harnessing the power of artificial intelligence to empower individuals and businesses. Discover innovative AI agents and solutions designed to streamline operations, spark creativity, and drive the future of technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.variable}>
        <LoadingScreen />
        <CustomCursor />
        <NavBar />
        {children}
        <PremiumFooter />
        <FloatingChat />
      </body>
    </html>
  );
}