import "./MainButton.css";

export default function MainButton() {
  const redirectToWhatsApp = () => {
    const phoneNumber = "987538969"; 
    const message = encodeURIComponent("¡Hola! Estoy interesado en obtener más información sobre una subscripción"); // Mensaje codificado
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    openInNewTab(whatsappUrl); // Abre en una nueva pestaña utilizando la función openInNewTab
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <button
      data-aos="fade-up"
      data-aos-duration="2500"
      className="cta"
      onClick={redirectToWhatsApp} 
    >
      <span className="span">Subscribirse</span>
      <span className="second">
        <svg
          width="5vw"
          height="auto"
          viewBox="0 0 66 43"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
        </svg>
      </span>
    </button>
  );
}