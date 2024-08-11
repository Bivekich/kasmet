import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import World from "./components/World/World";

function App() {
  return <div className="app">
    <Header />
    <Hero />
    <About />
    <Catalog />
    <World />
  </div>;
}

export default App;
