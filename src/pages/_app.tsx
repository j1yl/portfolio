import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
