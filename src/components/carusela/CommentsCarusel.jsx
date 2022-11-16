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

export default function CommentsCarusel() {
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
           <div className="swipper1 padding20pxcarusel">
       <div className="bigImage">

        </div>

        <div className="flexcol center">
        <p className="name">Alice Blue</p>
        <p className="text w500"> Our mission is to provide you with forward-thinking, sophisticated
            style. Our space, designed by Italian architect Matias Sagaria, is
            filled with linear balance and injects our inspiration with
            modernity and purity.</p>


        </div>


       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swipper1 padding20pxcarusel">
       <div className="bigImage">

        </div>

        <div className="flexcol center">
        <p className="name">Alice Blue</p>
        <p className="text w500"> Our mission is to provide you with forward-thinking, sophisticated
            style. Our space, designed by Italian architect Matias Sagaria, is
            filled with linear balance and injects our inspiration with
            modernity and purity.</p>


        </div>


       </div>
        </SwiperSlide>
        <SwiperSlide>       <div className="swipper1 padding20pxcarusel">
       <div className="bigImage">

        </div>

        <div className="flexcol center">
        <p className="name">Alice Blue</p>
        <p className="text w500"> Our mission is to provide you with forward-thinking, sophisticated
            style. Our space, designed by Italian architect Matias Sagaria, is
            filled with linear balance and injects our inspiration with
            modernity and purity.</p>


        </div>


       </div></SwiperSlide>
        <SwiperSlide>      <div className="swipper1 padding20pxcarusel">
       <div className="bigImage">

        </div>

        <div className="flexcol center">
        <p className="name">Alice Blue</p>
        <p className="text w500"> Our mission is to provide you with forward-thinking, sophisticated
            style. Our space, designed by Italian architect Matias Sagaria, is
            filled with linear balance and injects our inspiration with
            modernity and purity.</p>


        </div>


       </div></SwiperSlide>
        <SwiperSlide> 
        <div className="swipper1 padding20pxcarusel">
       <div className="bigImage">

        </div>

        <div className="flexcol center">
        <p className="name">Alice Blue</p>
        <p className="text w500"> Our mission is to provide you with forward-thinking, sophisticated
            style. Our space, designed by Italian architect Matias Sagaria, is
            filled with linear balance and injects our inspiration with
            modernity and purity.</p>


        </div>


       </div></SwiperSlide>

      </Swiper>
    </>
  );
}
