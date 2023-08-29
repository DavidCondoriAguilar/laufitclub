import "./MainNosotros.css";
import one from "./../assets/images/image1.jpg";
import two from "./../assets/images/image4.jpg";
import three from "./../assets/images/image5.jpg";
import four from "./../assets/images/image6.jpg";

import Slider from "react-slick";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function MainNosotros() {
  return (
    <div id="threeSec" className="container-fluid nosotros">
      <div className="row">
        <div className=" col-lg-6 col-md-6 col-xl-6  col-sm-12  py-5 d-flex flex-column align-items-center">
          <h2 className="py-4">Strong</h2>
          <h2 className="py-4">BodyBuild</h2>
          <h2 className="py-4">Muscle</h2>
        </div>
        <div className="  col-lg-6 col-xl-6 col-md-6 col-sm-12">
          <div>
            <Slider className="text-center" {...settings}>
              <div>
                <img src={one} className="img-fluid text-center" />
              </div>
              <div>
                <img src={two} className="img-fluid text-center" />
              </div>
              <div>
                <img src={three} className="img-fluid text-center" />
              </div>
              <div>
                <img src={four} className="img-fluid text-center" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
