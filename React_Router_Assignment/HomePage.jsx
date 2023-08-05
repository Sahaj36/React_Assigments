import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import "./style.css";

// // import images
// import img6 from "./images/img6.jpg";
// import img7 from "./images/img7.jpg";
// import img8 from "./images/img8.jpg";
// import img9 from "./images/img9.jpg";
// import img10 from "./images/img10.jpg";

function HomePage() {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.usatoday.com/gcdn/-mm-/3a0944a1130234afb86c0cce1992ee8f3234a747/c=473-0-2605-1204/local/-/media/USATODAY/gamehunters/2014/07/03/1404431448000-XXX-TRANSFORMERS-AGE-EXTINCTION-MOV-JY-779--65568024.JPG"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-d37f5243f6ae21dcfb1fbf28dfe261f5.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomePage;
