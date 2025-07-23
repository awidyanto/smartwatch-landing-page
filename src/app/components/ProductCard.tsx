"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../components/styleproductcard.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ProductCard() {
  const links = [
    { filename: "smartwatch01.webp" },
    { filename: "smartwatch02.webp" },
    { filename: "smartwatch03.webp" },
    { filename: "smartwatch04.webp" },
    { filename: "smartwatch05.webp" },
    { filename: "smartwatch06.webp" },
    { filename: "smartwatch07.webp" },
    { filename: "smartwatch08.webp" },
    { filename: "smartwatch09.webp" },
    { filename: "smartwatch10.webp" },
    { filename: "smartwatch11.webp" },
    { filename: "smartwatch12.webp" },
    { filename: "smartwatch13.webp" },
    { filename: "smartwatch14.webp" },
    { filename: "smartwatch15.webp" },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {links.map((link, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SwiperSlide>
              <a
                href={"https://www.garmin.co.id/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={500}
                  height={200}
                  src={"/product/" + link.filename}
                  alt="placeholder-image"
                  className="w-full"
                />
              </a>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
