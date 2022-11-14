import "./App.css";
import React, { useEffect, useState } from "react";
import ServicesData from "./ServicesData";
import PortfolioData from "./PortfolioData";

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import { Menu } from "./components/Menu/Menu";
import { ChakraProvider } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import DarkModeSwitch from "./components/Nav/NavBar";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 });
  }, []);

  return (
    <div className="App">
      <ChakraProvider>
        {/* <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <DarkModeSwitch></DarkModeSwitch>
        <Home />
        <Services services={ServicesData} />
        <Portfolio projects={PortfolioData} />
        <Contact />
      </ChakraProvider>
    </div>
  );
}

export default App;
