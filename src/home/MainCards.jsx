import './MainCards.css'; 
import oneSlide from './../assets/images/pesas.jpg'
import fitGirl from './../assets/images/fitgirl.jpg'



export default function MainCards() {
  return (
    <div className="cards container-fluid image-container w-100  text-center m-0">
    <div className="row p-0 d-flex" >
      <div className="col-md-6 col-xl-3 col-sm-6 p-0 carde py-5">
        <h4>Entrenamiento</h4>
        <h2>Plan Entreno</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <span>Leer mas</span>
      </div>
      <div className="col-md-6 col-xl-3 col-sm-6 p-0">
        <img src={oneSlide} alt="Imagen 2" className="img-fluid bg-white" id='bg'/>
      </div>
      <div className="col-md-6 col-xl-3 col-sm-6 p-0 carde py-5">
        <h4>Entrenamiento</h4>
        <h2>Plan Entreno</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <span>Leer mas</span>
      </div>
      <div className="col-md-6 col-xl-3 col-sm-6 p-0">
        <img src={fitGirl} alt="Imagen 4" className="img-fluid"/>
      </div>

      <div className="col-md-6 col-xl-3 col-sm-6 p-0">
        <img src={oneSlide} alt="Imagen 6" className="img-fluid bg-white"/>
      </div>
      <div className="col-md-6 col-xl-3 col-sm-6 p-0 carde py-5 " >
        <h4>Entrenamiento</h4>
        <h2>Plan Entreno</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <span>Leer mas</span>
      </div>
      <div className="col-md-6 col-xl-3 col-sm-6 p-0">
        <img src={fitGirl} alt="Imagen 8" className="img-fluid"/>
      </div>
      <div className="col-md-6 col-xl-3 col-sm-6 p-0 carde py-5">
        <h4>Entrenamiento</h4>
        <h2>Plan Entreno</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <span>Leer mas</span>
      </div>
      
    </div>
  </div>
  )
}
