import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import AcercaDeMi from "./components/AcercaDeMi";
import BackgroundTop from "./components/BackgroundTop";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import Contact from "./components/ContactForm";



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <BackgroundTop />
      <AcercaDeMi />
      <Skills />
      <Portafolio />
      <Contact />
      
    
    </div>
  );
}

export default App;
