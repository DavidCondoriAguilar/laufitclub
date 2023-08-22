import './WhatsButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const phoneNumber = '987538969';
  const defaultMessage = '¡Hola! Estoy interesado en obtener más información sobre los servicios del gimnasio.';

  const openWhatsAppWithMessage = () => {
    const message = encodeURIComponent(defaultMessage);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    openInNewTab(whatsappLink);
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const handleWhatsAppClick = () => {
    openWhatsAppWithMessage();
  };

  return (
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </button>
  );
};

export default WhatsAppButton;
