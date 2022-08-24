import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import AcercaDeMi from "./components/AcercaDeMi";
import BackgroundTop from "./components/BackgroundTop";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="general container">
      

      <ResponsiveAppBar />
      <BackgroundTop />
      <AcercaDeMi />
      <Skills />
      <Portafolio />
      <ContactForm />
      <Footer />
        
    </div>
  );
}

export default App;
