import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import World from "./components/World/World";
import Clients from "./components/Clients/Clients";
import Addresses from "./components/Addresses/Addresses";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return <div className="app">
    <Header />
    <Hero />
    <Catalog />
    <About />
    <World />
    <Clients />
    <Addresses />
    <Contacts />
    <Footer />
  </div>;
}

export default App;
