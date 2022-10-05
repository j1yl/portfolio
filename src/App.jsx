import "./css/App.scss";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Hero />
        <Projects />
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
