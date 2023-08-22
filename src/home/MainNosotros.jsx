import "./MainNosotros.css";
import flyer from './../assets/images/fly.jpg'

export default function MainNosotros() {
    return (
        <div className="container-fluid nosotros text-center ">
            <div className="row">
                <div className=" col-lg-6 col-xl-6  col-sm-12  py-5 d-flex flex-column align-items-center">
                    <h2 className="py-4" data-aos="fade-down-right"  data-aos-duration="1500">Strong</h2>
                    <h2 className="py-4" data-aos="fade-down-right"  data-aos-duration="1500">BodyBuild</h2>
                    <h2 className="py-4" data-aos="fade-down-right"  data-aos-duration="1500">Muscle</h2>
                </div>
                <div className="  col-lg-6 col-xl-6 col-sm-12">
                    <img className="w-100 img-fluid p-0" src={flyer} />
                </div>
            </div>
        </div>

    )
}
