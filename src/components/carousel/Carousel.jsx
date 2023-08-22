import Slider from "react-slick";
// import { useState } from 'react';
import oneSlide from "./../../assets/images/pesas.jpg";
import twoSlide from "./../../assets/images/man.jpg";

import "./Carousel.css";

const AutoPlay = () => {
  // const [autoplay, setAutoplay] = useState(true);

  // const toggleAutoplay = () => {
  //     setAutoplay(!autoplay);
  // };

  return (
    <div id="carousel" className="container-fluid py-3">
      <div className="row">
        <div className="col-lg-8 col-xl-8  col-sm-12">
          <Slider
            autoplay={true}
            speed={2000}
            autoplaySpeed={3000}
            cssEase="linear"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-xl-6  col-sm-6 mt-5 carding text-center">
                  <div className="card-deck">
                    <div id="carding" className="card h-100 " >
                      <img
                        className="card-img-top img-fluid"
                        id="img-filter"
                        src={twoSlide}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6  col-sm-6 mt-5 carding text-center">
                  {" "}
                  <div id="carding" className="card h-100 " >
                    <img
                      className="card-img-top img-fluid "
                      id="img-filter"
                      src={oneSlide}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-xl-6  col-sm-6 mt-5 carding">
                  <div className="card-deck">
                    <div className="card h-100 ">
                      <img
                        className="card-img-top img-fluid"
                        src={twoSlide}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6  col-sm-6 mt-5 carding">
                  {" "}
                  <div className="card h-100 ">
                    <img
                      className="card-img-top img-fluid"
                      src={oneSlide}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
{/* 
            <div>
              <img src={twoSlide} alt="Imagen 2" className="img-fluid" />
            </div>
            <div>
              <img src={oneSlide} alt="Imagen 2" className="img-fluid" />
            </div>
            <div>
              <img src={twoSlide} alt="Imagen 2" className="img-fluid" />
            </div>
            <div>
              <img src={oneSlide} alt="Imagen 2" className="img-fluid" />
            </div>
            <div>
              <img src={twoSlide} alt="Imagen 2" className="img-fluid" />
            </div> */}
          </Slider>
          {/* <button className='btn btn-primary' onClick={toggleAutoplay}>
                {autoplay ? "Pause" : "Play"}
            </button> */}
        </div>
        <div className="col-lg-4 col-xl-4  col-sm-12 mt-5 py-5">
          <h2>hola mundo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            aspernatur saepe minima doloribus vitae ratione!
          </p>
          <button className="btn btn-danger"></button>
        </div>
      </div>
    </div>
  );
};

export default AutoPlay;
