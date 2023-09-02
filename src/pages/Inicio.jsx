import { Carousel } from "react-bootstrap";
import MainBanner from "../common/MainBanner";
import MainNosotros from "../home/MainNosotros";
import MainCards from "../home/MainCards";
import MainBmi from "../home/MainBmi";
import Testimonials from "../layout/comentarios/Testimonials";


export default function Inicio() {
  return (
    <>
    <MainBanner/>
    <MainNosotros/>
    <Carousel/>
    <MainBmi/>
    <Testimonials/>
    <MainCards/>
    </>
  )
}
