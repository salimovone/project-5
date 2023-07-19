import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { data } from "./data";

const Header = () => {
  return (
    <div className="w-full max-w-[1366px] m-auto px-[15px] bg-white">
      <Swiper
        slidesPerView={1}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data.map((item) => (
          <SwiperSlide
            className="w-full head-slide relative"
            key={item.id}
          >
            <Swiper
              className="absolute top-0 left-0 -z-20"
              slidesPerView={1}
              loop
              effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
            >
              {data.map((item2) => (
                <SwiperSlide
                  className="w-full inside-slide relative bg-white"
                  key={item.id}
                >
                  <div
                    className="inside-image w-[70%] max-lg:w-full float-right"
                    style={{ backgroundImage: `url("${item2.img}")` }}
                  ></div>
                  <div className="absolute w-full h-full top-0 left-0 flex items-center px-[15px]">
                    <div className="max-w-[600px] w-full">
                      <h1 className="text-6xl font-black max-md:text-4xl max-lg:text-[blue] max-md:text-center">
                        {item2.title}
                      </h1>
                      <p className="my-8 text-[#000c] max-lg:text-[blue] max-md:text-center">
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <div className="w-full flex max-md:justify-center">
                        <button className="bg-[#0033c7] text-white py-4 px-6 rounded-full">
                          view our works
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="overSlide"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;

/*  */
