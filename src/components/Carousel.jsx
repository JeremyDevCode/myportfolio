import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import * as ReactDOMServer from "react-dom/server";
import { Pagination, Navigation } from "swiper";
import { LeftArrowIcon } from "../assets/icons/LeftArrowIcon";
import { RightArrowIcon } from "../assets/icons/RightArrowIcon";
import Image from "next/image";

export const Carousel = ({ images }) => {
  const swiperRef = useRef();

  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          type: "custom",
          renderCustom: (_, current, total) => {
            return ReactDOMServer.renderToStaticMarkup(
              <div className="absolute w-[50px] bottom-2 right-2 bg-[#FFF9] text-[#333] px-2 py-1 rounded-md text-sm font-semibold">
                {current} / {total}
              </div>
            );
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="relative flex items-center justify-center w-full h-23 cursor-grab active:cursor-grabbing"
      >
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden sm:flex items-center justify-center absolute w-[26px] h-[26px] bg-[#FFF9] hover:bg-[#FFFFFFbb] top-0 bottom-0 my-auto left-2 rounded-full z-50"
        >
          <LeftArrowIcon />
        </button>
        {images.map(({ name, image }) => (
          <SwiperSlide key={name}>
            <Image
              className="w-full h-full"
              src={image}
              width={1250}
              height={950}
              alt={name}
            />
          </SwiperSlide>
        ))}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden sm:flex items-center justify-center absolute w-[26px] h-[26px] bg-[#FFF9] hover:bg-[#FFFFFFbb] top-0 bottom-0 my-auto right-2 rounded-full z-50"
        >
          <RightArrowIcon />
        </button>
      </Swiper>
    </>
  );
};
