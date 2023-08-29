import "./MainNav.css";
import logo from "./../assets/images/laaufit.jpg";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav id="navBur" className=" navbar navbar-expand-lg">
      <div className="container p-0">
        <img className="loge" src={logo} alt="Logo LauFit" />
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-4">
            <li className="nav-item">
            <Link className="nav-link" to="/inicio">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobrenosotros">
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactanos">
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
