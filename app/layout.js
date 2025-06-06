import { Inter } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "COACH : Creating Opportunities And Career Hope",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/*header*/}
            <Header />
            <main className="min-h-screen">{children}</main>
            {/*footer*/}
            <footer className="bg-muted/100 py-9 font-bold">
              <div className="container mx-auto px-5 text-center text-gray-200">
                <p>
                  Made With ❤️ Love by alphacon.
                </p>
              </div>
            </footer>
          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}
