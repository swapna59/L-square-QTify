import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    if (!swiper) return;

    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };

    // Set initial state
    setIsBeginning(swiper.isBeginning);

    // Listen for slide changes
    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange); // cleanup
    };
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <LeftArrow
          onClick={() => swiper && swiper.slidePrev()}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}
