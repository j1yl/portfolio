import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Dosis } from "@next/font/google";
import "../styles/globals.css";

const dosis = Dosis({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className={dosis.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default MyApp;
