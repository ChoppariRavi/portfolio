import localFont from "next/font/local";
import "../app/globals.css";
import Navbar from "../components/Navbar";
import { AppProps } from "next/app";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar />
      <Component {...pageProps} />
     
      <footer className='container mx-auto text-primary text-sm mb-4'>
        <hr className="bg-primary my-2" />
        @{new Date().getFullYear()} Ravi Choppari
      </footer>
    </div>
  );
};

export default MyApp;
