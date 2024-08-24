import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Firmscheduler",
  description: "Schedule meetings in seconds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
