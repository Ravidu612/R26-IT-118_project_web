import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "TeaGuard AI | Intelligent Decision Support System for Sri Lankan Tea Estate Management (R26-IT-118)",
  description:
    "SLIIT Final-Year Undergraduate Research Project (Group R26-IT-118). An integrated AI, ML, Deep Learning, and IoT decision support system for labor management, tea leaf disease detection, climate intelligence, and tea sorting automation.",
  keywords: [
    "TeaGuard AI",
    "Sri Lankan Tea Estate Management",
    "SLIIT Research Project",
    "R26-IT-118",
    "Ceylon Tea",
    "Tea Leaf Disease Detection",
    "YOLOv8s",
    "ConvNeXtV2",
    "Precision Agriculture Sri Lanka",
    "Tea Research Institute of Sri Lanka",
  ],
  authors: [
    { name: "Miuranga W.A.R" },
    { name: "Gunasekara L.M.N.P" },
    { name: "Gunasekara G.N.D" },
    { name: "Pathirana I.M" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-primary/30">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
