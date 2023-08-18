import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import "../../../styles/slider.css";
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
       "Absolutely delicious food! Great service!
                 Great atmosphere. Sat inside with a beautiful
                  water view! I recommend going first thing when they open. 
                  It wasn't too crowded despite the lunchtime busyness
                . A great way to celebrate my birthday early! I WILL BE COMING BACK!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Amr Mostafa </h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "Absolutely delicious food! Great service!
                 Great atmosphere. Sat inside with a beautiful
                  water view! I recommend going first thing when they open. 
                  It wasn't too crowded despite the lunchtime busyness
                . A great way to celebrate my birthday early! I WILL BE COMING BACK!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Rola Ali</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "Absolutely delicious food! Great service!
                 Great atmosphere. Sat inside with a beautiful
                  water view! I recommend going first thing when they open. 
                  It wasn't too crowded despite the lunchtime busyness
                . A great way to celebrate my birthday early! I WILL BE COMING BACK!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Ammer Omar </h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
