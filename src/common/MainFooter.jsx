import "./MainFooter.css";
import { BiLogoInstagram, BiLogoWhatsapp } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { FiFacebook, FiPhoneCall } from 'react-icons/fi';
import { TbBrandGmail } from 'react-icons/tb';
import { SiMinutemailer } from 'react-icons/si';




export default function MainFooter() {

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const openWhatsAppWithMessage = () => {
    const phoneNumber = '987538969'; // Cambiar al número de teléfono correcto
    const message = '¡Hola! Estoy interesado en obtener más información sobre los servicios del gimnasio.';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    openInNewTab(whatsappLink);
  };
  


  return (
    <footer className="footer ">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-4 col-sm-12">
            <h5>Síguenos en:</h5>
            <div className="social-icons mt-5 py-4">
              <a href="#" onClick={() => openInNewTab('https://www.instagram.com/laufitnessclub/')}><BiLogoInstagram className="fs-1 mx-2 ig hov" /></a>
              <a href="#" onClick={openWhatsAppWithMessage}><BiLogoWhatsapp className="fs-1 mx-2 ws hov" /></a>
              <a href="#" onClick={() => openInNewTab('https://www.facebook.com/Laufitnessclub/')}><FiFacebook className="fs-1 mx-2 fb hov" /></a>
              <a href="#" onClick={() => openInNewTab('mailto:laufitnessclub@gmail.com')}><TbBrandGmail className="fs-1 mx-2 gm hov" /></a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5 >Contáctanos</h5>
            <p className="py-2"><IoLocationOutline className="fs-4" /> Av. Proceres Mz TT2 LOTE 6 URB. LA FLORESTA DE PRO 15301 Los Olivos, Peru</p>
            <p><FiPhoneCall className="fs-4" /> Teléfono: (123) 456-7890</p>
            <p><SiMinutemailer className="fs-4" /> Email: laufitnessclub@gmail.com</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5>Horario de Atención</h5>
            <ul className="list-unstyled">
              <li className="py-1"><IoIosArrowForward />Lunes - Viernes: 6:00 AM - 10:00 PM</li>
              <li className="py-1"><IoIosArrowForward />Sábados: 8:00 AM - 10:00 PM</li>
              <li className="py-1"><IoIosArrowForward />Domingos: Cerrado</li>
            </ul>
          </div>


        </div>

      </div>
      <div className="col-12 foot">
        <p className="text-center align-items-center">© 2023 LAU FITNESS CLUB, Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
