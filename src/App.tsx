import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App font-poppins">
      <Header />
      <Hero />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
