/* eslint-disable react/no-unescaped-entities */
import oneSlide from './../assets/images/one.jpg'
import twoSlide from './../assets/images/two.jpg'
import thirdSlide from './../assets/images/third.jpg'
import "./MainBanner.css"
import MainButton from '../layout/MainButton'


export default function MainBanner() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={twoSlide} className="d-block img-fluid w-100" loading='lazy' />
                    <div className="carousel-caption  ">
                        <h2 className="text-light mb-5" data-aos="fade-up"
                            data-aos-duration="2500">Lau Fitness Club</h2>
                        <MainButton/>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={oneSlide} className="d-block img-fluid w-100" loading='lazy' />
                    <div className="carousel-caption ">
                        <h2 className="text-light mb-5"  >"¡Empieza tu viaje de fitness hoy!"</h2>
                        <MainButton />
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={thirdSlide} className="d-block img-fluid w-100" loading='lazy' />
                    <div className="carousel-caption  ">
                        <h2 className="text-light mb-5"   >"El ejercicio es la mejor medicina."</h2>
                        <MainButton/>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
