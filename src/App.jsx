import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./css/App.scss";

function App() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
