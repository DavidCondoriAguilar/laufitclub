// import strong from "../../assets/images/pesas.jpg";

export default function Contactanos() {
  return (
<div className="container p-5">
      <div className="row">
        {/* Columna del formulario */}
        <div className="col-lg-6">
          <div className="registration-form">
            <h2>Regístrate</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <button type="submit" className="btn btn-primary my-3">Registrarse</button>
            </form>
          </div>
        </div>

        {/* Columna de llamado a la acción */}
        <div className="col-lg-6">
          <div className="cta-section">
            <div className="cta-content">
              <h2>Únete a nuestra comunidad</h2>
              <p>¡Regístrate hoy y descubre un mundo de posibilidades!</p>
              <button className="btn btn-outline-primary">Regístrate Ahora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
