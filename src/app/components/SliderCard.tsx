"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../components/styleslidercard.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import Image from "next/image";

export default function SliderCard() {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (
    swiper: SwiperType,
    timeLeft: number,
    percentage: number
  ): void => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - percentage)
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(timeLeft / 1000)}s`;
    }
  };

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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="p-30">
            <Image
              width={100}
              height={300}
              src={"/smartwacth01.jpg"}
              alt="placeholder-image"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-30 my-5">
            <Image
              width={100}
              height={300}
              src={"/smartwatch02.webp"}
              alt="placeholder-image"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-30 my-5">
            <Image
              width={100}
              height={300}
              src={"/smartwatch03.webp"}
              alt="placeholder-image"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-30 my-5">
            <Image
              width={100}
              height={300}
              src={"/smartwatch04.webp"}
              alt="placeholder-image"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-30 my-5">
            <Image
              width={100}
              height={300}
              src={"/smartwatch04.webp"}
              alt="placeholder-image"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-30 my-5">
            <Image
              width={100}
              height={300}
              src={"/smartwatch05.webp"}
              alt="placeholder-image"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-30 my-5">
            <Image
              width={100}
              height={300}
              src={"/smartwatch06.webp"}
              alt="placeholder-image"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-30 my-5">
            <Image
              width={100}
              height={300}
              src={"/smartwatch07.webp"}
              alt="placeholder-image"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-30 my-5">
            <Image
              width={100}
              height={300}
              src={"/smartwatch08.webp"}
              alt="placeholder-image"
              className="w-full"
            />
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
