import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiper) return;

    const handleSlideChange = () => {
      setIsEnd(swiper.isEnd);
    };

    // Set initial state
    setIsEnd(swiper.isEnd);

    // Listen for slide changes
    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange); // cleanup
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <RightArrow
          onClick={() => swiper && swiper.slideNext()}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}
