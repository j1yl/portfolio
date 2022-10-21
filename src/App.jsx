import "./App.scss";
import Header from "./comps/Header";
import Hero from "./comps/Hero";
import About from "./comps/About";
import Works from "./comps/Works";
import Footer from "./comps/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
