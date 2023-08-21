import "./App.css";
import MainFooter from "./common/MainFooter";
import MainNav from "./common/MainNav";
import WhatsButton from "./components/WhatsButton";
// import ContactForm from './components/formulario/Form'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreNosotros from "./pages/SobreNosotros";
import Contactanos from "./pages/contacto/Contactanos";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNav />
        <Routes>

        <Route path="/inicio" element={<Inicio />} />
        <Route path="/SobreNosotros" element={<SobreNosotros/>} />
        <Route path="/Contactanos" element={<Contactanos/>} />

        </Routes>
        <WhatsButton />
        <MainFooter />
      </BrowserRouter>
      {/* <ContactForm/> */}
    </>
  );
}

export default App;
