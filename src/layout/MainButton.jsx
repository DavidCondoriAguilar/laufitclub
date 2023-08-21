/* eslint-disable react/no-unknown-property */
import "./MainButton.css";

export default function MainButton() {
  return (
    <button data-aos="fade-up"
      data-aos-duration="2500" className="cta">
      <span className="span">Subscribirse</span>
      <span className="second">
        <svg
          width="5vw"
          height="auto"
          viewBox="0 0 66 43"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
        </svg>
      </span>
    </button>
  )
}
