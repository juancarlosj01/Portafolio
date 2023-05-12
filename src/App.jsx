import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import AcercaDeMi from "./components/AcercaDeMi";
import BackgroundTop from "./components/BackgroundTop";
import Skills from "./components/Skills";
import Portafolio from "./components/Portafolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Portafolio2 from "./components/Portafolio2";

function App() {
  return (
    <div className="general container">
      <ResponsiveAppBar />
      <BackgroundTop />
      <AcercaDeMi />
      <Skills />
      <div className="cajon">
        <div className="cajon1">
          <Portafolio />
        </div>
        <div className="cajon2">
          <Portafolio2 />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
