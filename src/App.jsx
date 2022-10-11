import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import "./css/App.scss";

function App() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
