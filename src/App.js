import "./App.css";
import ServicesData from "./ServicesData";
import PortfolioData from "./PortfolioData";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/Nav/NavBar";
import Skills from "./components/Skills/skills";
import SkillData from "./SkillsData";
import AboutMe from "./components/AboutMe/aboutme";


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <NavBar></NavBar>
        <Home />
        <AboutMe />
        <Skills skills={SkillData} />
        <Services services={ServicesData} />
        <Portfolio projects={PortfolioData} />
        <Contact />
      </ChakraProvider>
    </div>
  );
}

export default App;
