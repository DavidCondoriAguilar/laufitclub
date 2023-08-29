import "./MainCards.css";
import oneSlide from "./../assets/images/pesas.jpg";
import fitGirl from "./../assets/images/fitgirl.jpg";

export default function MainCards() {
  return (
    <div
      id="card"
      className="cards container-fluid image-container w-100  text-center m-0"
    >
      <div className="row p-0 d-flex">
        <div className="col-md-6 col-xl-3 col-sm-6 p-0 carde py-5">
          <h4>Entrenamiento</h4>
          <h2>Misión</h2>
          <p className="mx-3">
          Nuestro propósito es transmitir conocimientos potenciadores y orientación formativa para tener un impacto positivo en la salud y el estado físico de todas las personas con las que trabajamos.
          </p>
          <span>Leer mas</span>
        </div>
        <div className="col-md-6 col-xl-3 col-sm-6 p-0 contenedor">
          <img
            src={fitGirl}
            alt="Imagen 2"
            className="img-fluid bg-white imagen"
            id="bg"
          />
        </div>
        <div className="col-md-6 col-xl-3 col-sm-6 p-0 carde py-5">
          <h4>Entrenamiento</h4>
          <h2>Plan Entreno</h2>
          <p className="mx-3">
          Somos un gimnasio híbrido y un centro de entrenamiento. Contamos con instalaciones limpias y con máquinas Americanas, con el personal más capacitado y métodos de capacitación de vanguardia.
          </p>
          <span>Leer mas</span>
        </div>
        <div className="col-md-6 col-xl-3 col-sm-6 p-0 contenedor">
          <img
            src={oneSlide}
            alt="Imagen 2"
            className="img-fluid bg-white imagen"
            id="bg"
          />
        </div>

        <div className="col-md-6 col-xl-3 col-sm-6 p-0 contenedor">
          <img
            src={fitGirl}
            alt="Imagen 2"
            className="img-fluid bg-white imagen"
            id="bg"
          />
        </div>
        <div className="col-md-6 col-xl-3 col-sm-6 p-0 carde py-5 ">
          <h4>Entrenamiento</h4>
          <h2>Blog Nutrición</h2>
          <p className="mx-3">
          Te damos la bienvenida a nuestro Blog de Nutrición y Salud. Aquí encontrarás una fuente confiable de información sobre cómo nutrir tu cuerpo y mantener un estilo de vida saludable.
          </p>
          <span>Leer mas</span>
        </div>
        <div className="col-md-6 col-xl-3 col-sm-6 p-0 contenedor">
          <img
            src={oneSlide}
            alt="Imagen 2"
            className="img-fluid bg-white imagen"
            id="bg"
          />
        </div>
        <div className="col-md-6 col-xl-3 col-sm-6 p-0 carde py-5">
          <h4>Entrenamiento</h4>
          <h2>Superación</h2>
          <p className="mx-3">
          Fomentamos la superación personal en cada repetición, en cada gota de sudor. Aquí no se trata solo de ejercicios, sino de vencer obstáculos y construir fuerza mental y física.
          </p>
          <span>Leer mas</span>
        </div>
      </div>
    </div>
  );
}
