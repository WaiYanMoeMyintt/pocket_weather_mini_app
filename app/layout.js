import "./globals.css";
import { Nunito } from "next/font/google";
const inter = Nunito({ subsets: ["latin"] });
import Weather from "./context/Weather";

export const metadata = {
  title: "WeatherRio",
  description: "Take the pocket weather app before leaving from your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Weather>
              {children}
          </Weather>
      </body>
    </html>
  );
}