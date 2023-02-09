import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Poppins, Itim, Roboto_Mono } from "@next/font/google";
import "../styles/globals.css";

const itim = Itim({
  weight: ["400"],
  subsets: ["latin"],
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

const pop = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={pop.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
