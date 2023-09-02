import "./MainNosotros.css";
import ReactPlayer from 'react-player';
import videoLaufit from "../assets/videos/laufit.mp4";


export default function MainNosotros() {
  return (
    <div id="threeSec" className="container nosotros my-3">
      <div className="row">
        <div className=" col-lg-8 col-md-8 col-xl-8  col-sm-12  py-5 d-flex flex-column align-items-center">
          <h2 className="py-4">Strong</h2>
          <h2 className="py-4">BodyBuild</h2>
          <h2 className="py-4">Muscle</h2>
        </div>
        <div className="  col-lg-4 col-xl-4 col-md-4 col-sm-12 my-3">
        <div className="video-container ">
      <ReactPlayer 
        url={videoLaufit}
        width="100%"
        height="70vh"
        controls
      />
    </div>
        </div>
      </div>
    </div>
  );
}
