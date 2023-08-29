import "./App.css";
import MainFooter from "./common/MainFooter";
import MainNav from "./common/MainNav";
import WhatsButton from "./components/WhatsButton";
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
          <Route index path="/inicio" element={<Inicio />} /> 
          <Route path="sobrenosotros" element={<SobreNosotros />} />
          <Route path="contactanos" element={<Contactanos />} />
        </Routes>
        
        <WhatsButton />
        <MainFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
