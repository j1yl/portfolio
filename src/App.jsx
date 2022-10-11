import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./css/App.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <Hero />
      </div>
    </>
  );
}

export default App;
