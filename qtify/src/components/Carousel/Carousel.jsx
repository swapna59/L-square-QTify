import React from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "../CarouselLeftNavigation/CarouselLeftNavgation";
import CarouselRightNavigation from "../CarouselRightNavigation/CarouselRightNavigation";
// import Controls from "./Controls/Controls";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        {/* <Controls data={data} /> */}
        <div>
          <CarouselLeftNavigation />
          <CarouselRightNavigation />
        </div>
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
