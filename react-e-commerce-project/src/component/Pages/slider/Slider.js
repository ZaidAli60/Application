import React from "react";
import Pic1 from "../../Assets/pic1.jpg";
import Pic2 from "../../Assets/pic2.jpg";
import Pic3 from "../../Assets/pic3.jpg";
import Pic4 from "../../Assets/pic4.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Slider() {
  return (
    <>
      <OwlCarousel
        className="owl-carousel owl-theme"
        items={1}
        margin={1}
        autoplay={true}
        loop={true}
        style={{ height: "25rem" }}
      >
        <img src={Pic1} style={{ height: "25rem" }} alt="pic1" />
        <img src={Pic2} style={{ height: "25rem" }} alt="pic1" />
        <img src={Pic3} style={{ height: "25rem" }} alt="pic1" />
        <img src={Pic4} style={{ height: "25rem" }} alt="pic4" />
      </OwlCarousel>
    </>
  );
}

export default Slider;
