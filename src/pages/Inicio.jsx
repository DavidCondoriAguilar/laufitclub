import { Carousel } from "react-bootstrap";
import MainBanner from "../common/MainBanner";
import MainNosotros from "../home/MainNosotros";
import MainCards from "../home/MainCards";
import MainBmi from "../home/MainBmi";


export default function Inicio() {
  return (
    <>
    <MainBanner/>
    <MainNosotros/>
    <Carousel/>
    <MainBmi/>
    <MainCards/>
    </>
  )
}
