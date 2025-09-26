import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel({ data, renderComponent }) {
  useEffect(() => {
    // Re-init swiper navigation after mount
    const { Swiper } = require("swiper");
    Swiper.use([Navigation]);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Custom Navigation Arrows */}
      <div
        className={`${styles.navButton} ${styles.left} custom-swiper-button-prev`}
      >
        ❮
      </div>
      <div
        className={`${styles.navButton} ${styles.right} custom-swiper-button-next`}
      >
        ❯
      </div>

      <Swiper
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={20}
        allowTouchMove
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
