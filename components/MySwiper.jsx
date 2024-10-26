// app/components/MySwiper.js or app/components/MySwiper.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";

// Install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

const MySwiper = () => {
  return (
    <Swiper
      effect="fade"
      // spaceBetween={100}
      slidesPerView={1}
      loop={true}
      // speed={500} // Duration of the transition in milliseconds
      // pagination={{ clickable: true }}
      // navigation={true} // Set to true if you want navigation buttons
    >
      <SwiperSlide>
        <div style={{ height: "100vh", backgroundColor: "red" }}>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: "100vh", backgroundColor: "blue" }}>Slide 2</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
