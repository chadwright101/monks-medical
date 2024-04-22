"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import data from "@/app/_data/general-data.json";

import "swiper/css";
import "swiper/css/effect-fade";

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
          modules={[Autoplay, EffectFade]}
          className={cssClasses}
        >
          {slider.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide}
                alt={`Monk's Medical by Dr. Kyle Rorke - Plettenberg Bay ${index}`}
                width={1680}
                height={1120}
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
            <Image
              src={slide}
              alt={`Monk's Medical - Image ${index}`}
              width={1100}
              height={740}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
};

export default Slider;
