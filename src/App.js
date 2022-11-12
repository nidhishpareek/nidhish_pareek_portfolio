import './App.css';
import React, { useEffect, useState } from "react";
import ServicesData from "./ServicesData";
import PortfolioData from "./PortfolioData";

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import { Menu } from "./components/Menu/Menu";

import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 });
  }, []);

  return (
    <div className="App">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Services services={ServicesData} />
      <Portfolio projects={PortfolioData} />
      <Contact />

    </div>
  );
}

export default App;
