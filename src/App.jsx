import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Footer from "./components/Footer";
import "./css/App.scss";

function App() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <Hero />
        <About />
        <Works />
        <Footer />
      </div>
    </>
  );
}

export default App;
