import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from '../../images/s1.jpeg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="h100 w100">
            <img src={Image1} className="img" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h100 w100">
            <img src={Image1} className="img" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide> <div className="h100 w100">
            <img src={Image1} className="img" alt="" />
            </div></SwiperSlide>
        <SwiperSlide> <div className="h100 w100">
            <img src={Image1} className="img" alt="" />
            </div></SwiperSlide>
        <SwiperSlide> 
            <div className="h100 w100">
            <img src={Image1} className="img" alt="" />
            </div></SwiperSlide>

      </Swiper>
    </>
  );
}
