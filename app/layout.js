  import "./globals.css";
  import { Nunito } from "next/font/google";
  const inter = Nunito({ subsets: ["latin"] });
  import Weather from "./context/Weather";
  import { ClerkProvider } from "@clerk/nextjs";
  export const metadata = {
    title: "WeatherRio",
    description: "Take the pocket weather app before leaving from your home.",
  };

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <ClerkProvider>
            <Weather>
                {children}
            </Weather>
            </ClerkProvider>
        </body>
      </html>
    );
  }
