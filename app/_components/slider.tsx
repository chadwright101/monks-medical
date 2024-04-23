"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import ImageComponent from "./image-component";

import data from "@/app/_data/general-data.json";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface Props {
  cssClasses?: string;
  desktop?: boolean;
}

const Slider = ({ cssClasses, desktop }: Props) => {
  const { slider } = data;

  if (desktop) {
    return (
      <>
        <Swiper
          autoplay={{
            delay: 3500,
          }}
          spaceBetween={16}
          loop={true}
          speed={1500}
          effect="fade"
          modules={[Autoplay, EffectFade, Pagination]}
          className={cssClasses}
          pagination={{
            dynamicBullets: true,
          }}
        >
          {slider.map((slide, index) => (
            <SwiperSlide key={index}>
              <ImageComponent
                file={slide}
                folder="images"
                altIndex={index}
                priority={index <= 1 ? true : false}
                phoneSize={400}
                tabletSize={600}
                desktopSmallSize={1100}
                desktopSize={1680}
                cssClasses="rounded-none"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  } else {
    return (
      <Swiper
        autoplay={{
          delay: 3500,
        }}
        spaceBetween={16}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        className={cssClasses}
      >
        {slider.map((slide, index) => (
          <SwiperSlide key={index}>
            <ImageComponent
              file={slide}
              folder="images"
              altIndex={index}
              priority={index <= 1 ? true : false}
              phoneSize={400}
              tabletSize={600}
              desktopSmallSize={1100}
              desktopSize={1550}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
};

export default Slider;
