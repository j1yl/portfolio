import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { EB_Garamond } from "@next/font/google";
import "../styles/globals.css";

const eb = EB_Garamond({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className={eb.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default MyApp;
