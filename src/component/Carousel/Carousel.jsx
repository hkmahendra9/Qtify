import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "./Carousel.module.css"; // Optional for custom styles

export default function Carousel({ children }) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={24}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
      }}
    >
      {React.Children.map(children, (child, idx) => (
         <SwiperSlide key={idx}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
