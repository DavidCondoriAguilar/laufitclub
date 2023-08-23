import strong from './../assets/images/pesas.jpg'
import AutoPlay from '../components/carousel/Carousel'

export default function SobreNosotros() {
  return (
<div className="container">
<div className="blog-post row">
      <div className="col-lg-6">
        <div className="blog-image">
          <img src={strong}  className="img-fluid" />
        </div>
        <div className="blog-text">
          <h2>Descrubre Más</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed aut reiciendis molestiae ut atque distinctio explicabo earum ipsa est dicta, accusantium consectetur culpa perferendis sequi aspernatur. Consequatur, consequuntur? Veniam, eveniet? Reprehenderit nesciunt vel praesentium?</p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="nutrition-info">
          <h2>Descubre la Nutrición</h2>
          <p>
            Aprende sobre los fundamentos de una dieta equilibrada y cómo mejorar tu salud a través de la nutrición adecuada. Descubre los beneficios de una alimentación balanceada y cómo hacer elecciones inteligentes para tu bienestar.
          </p>
        </div>
      </div>
      
      <div className="col-sm-12 col-auto mx-auto">
      <AutoPlay className="text-center mx-auto" />

      </div>
    </div>
</div>
  )
}
